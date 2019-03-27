import { createMockStore } from 'react-redux-test';
import thunk from 'redux-thunk';
import {
  fetchGenresRequest,
  fetchGenresSuccess,
  fetchGenresFailure,
  fetchGenres,
} from './genres';

describe('Genres actions suite', () => {
  it('should return the right object when fetchGenresRequest() is dispatched', () => {
    expect(fetchGenresRequest()).toEqual({
      type: 'FETCH_GENRES_REQUEST',
    });
  });

  it('should return the right object when fetchGenresSuccess() is dispatched', () => {
    expect(fetchGenresSuccess([])).toEqual({
      type: 'FETCH_GENRES_SUCCESS',
      genres: [],
    });
  });

  it('should return the right object when fetchGenresFailure() is dispatched', () => {
    expect(fetchGenresFailure({})).toEqual({
      type: 'FETCH_GENRES_FAILURE',
      error: {},
    });
  });

  it('should dispatch the right actions when fetchGenres() is successful', async () => {
    fetchMock.once('*', JSON.stringify({ genres: [] }));

    const mockStore = createMockStore(
      () => ({ settings: { envVars: {}, site: {} } }),
      undefined,
      [thunk],
    );
    await mockStore.dispatch(fetchGenres());

    expect(mockStore.getDispatchedActions()).toEqual([
      expect.objectContaining({ type: 'FETCH_GENRES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_GENRES_SUCCESS' }),
    ]);
  });

  it('should dispatch the right actions when fetchGenres() is failure', async () => {
    fetchMock.once('*', 404);

    const mockStore = createMockStore(
      () => ({ settings: { envVars: {}, site: {} } }),
      undefined,
      [thunk],
    );
    await mockStore.dispatch(fetchGenres());

    expect(mockStore.getDispatchedActions()).toEqual([
      expect.objectContaining({ type: 'FETCH_GENRES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_GENRES_FAILURE' }),
    ]);
  });
});
