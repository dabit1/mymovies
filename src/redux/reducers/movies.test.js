import { createMockStore } from 'react-redux-test';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import moviesReducer from './movies';
import { fetchMovies, resetPaging, addFilter, removeFilter, resetFilters, changeSearchText } from '../actions/movies';

const fakeInitialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 0,
  filters: [],
  searchText: '',
};

const setupStore = () => {
  const mockStore = createMockStore(
    combineReducers({ movies: moviesReducer, settings: () => ({ envVars: {}, site: {} }) }),
    undefined,
    [thunk],
  );
  return mockStore;
};

describe('Movies reducer suite', () => {
  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(fakeInitialState);
  });

  it('should mark as loading when fetch movies is requested', () => {
    // mocking the fetch response
    fetchMock.once('*', JSON.stringify({ results: [] }));

    const mockStore = setupStore();
    mockStore.dispatch(fetchMovies());

    expect(mockStore.getState().movies.isLoading).toBeTruthy();
  });

  it('should save the items when fetch movies is successful', async () => {
    // mocking the fetch response
    fetchMock.once('*', JSON.stringify({ results: ['fake response'] }));

    const mockStore = setupStore();
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getState().movies).toEqual(expect.objectContaining({
      items: ['fake response'],
      isLoading: false,
    }));
  });

  it('should save the error when fetch movies is failed', async () => {
    // mocking the fetch response
    fetchMock.once('*', 500);

    const mockStore = setupStore();
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getState().movies).toEqual({
      ...fakeInitialState,
      error: expect.objectContaining({ status: 500 }),
      isLoading: false,
    });
  });

  it('should increment the page when fetch movies is successful', async () => {
    // mocking the fetch response
    fetchMock.once('*', JSON.stringify({ results: ['fake response'] }));

    const mockStore = setupStore();
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getState().movies).toEqual(expect.objectContaining({
      page: 1,
    }));
  });

  it('should reset the paging', () => {
    const newState = moviesReducer({ ...fakeInitialState, page: 2, items: ['fake'] }, resetPaging());

    const expectedNewState = {
      ...fakeInitialState,
      page: 0,
      items: [],
    };
    expect(newState).toEqual(expectedNewState);
  });

  it('should add a filter', () => {
    const newState = moviesReducer(fakeInitialState, addFilter('fake filter'));

    const expectedNewState = {
      ...fakeInitialState,
      filters: ['fake filter'],
    };
    expect(newState).toEqual(expectedNewState);
  });

  it('should remove a filter', () => {
    const newState = moviesReducer({ ...fakeInitialState, filters: ['fake filter'] }, removeFilter('fake filter'));

    const expectedNewState = {
      ...fakeInitialState,
      filters: [],
    };
    expect(newState).toEqual(expectedNewState);
  });

  it('should change the search text', () => {
    const newState = moviesReducer(fakeInitialState, changeSearchText('fake text'));

    const expectedNewState = {
      ...fakeInitialState,
      searchText: 'fake text',
    };
    expect(newState).toEqual(expectedNewState);
  });

  it('should reset the filters', () => {
    const newState = moviesReducer({ ...fakeInitialState, filters: ['fake'] }, resetFilters());

    const expectedNewState = {
      ...fakeInitialState,
      filters: [],
    };
    expect(newState).toEqual(expectedNewState);
  });
});
