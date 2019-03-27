import { createMockStore } from 'react-redux-test';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import genresReducer from './genres';
import { fetchGenres } from '../actions/genres';

const fakeInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const setupStore = () => {
  const mockStore = createMockStore(
    combineReducers({ genres: genresReducer, settings: () => ({ envVars: {}, site: {} }) }),
    undefined,
    [thunk],
  );
  return mockStore;
};

describe('Genres reducer suite', () => {
  it('should return the initial state', () => {
    expect(genresReducer(undefined, {})).toEqual(fakeInitialState);
  });

  it('should mark as loading when fetch genres is requested', () => {
    // mocking the fetch response
    fetchMock.once('*', JSON.stringify({ genres: [] }));

    const mockStore = setupStore();
    mockStore.dispatch(fetchGenres());

    expect(mockStore.getState().genres.isLoading).toBeTruthy();
  });

  it('should save the items when fetch genres is successful', async () => {
    // mocking the fetch response
    fetchMock.once('*', JSON.stringify({ genres: ['fake response'] }));

    const mockStore = setupStore();
    await mockStore.dispatch(fetchGenres());

    expect(mockStore.getState().genres).toEqual(expect.objectContaining({
      items: ['fake response'],
      isLoading: false,
    }));
  });

  it('should save the error when fetch genres is failed', async () => {
    // mocking the fetch response
    fetchMock.once('*', 500);

    const mockStore = setupStore();
    await mockStore.dispatch(fetchGenres());

    expect(mockStore.getState().genres).toEqual({
      ...fakeInitialState,
      error: expect.objectContaining({ status: 500 }),
      isLoading: false,
    });
  });
});
