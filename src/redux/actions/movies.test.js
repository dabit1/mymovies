import { createMockStore } from 'react-redux-test';
import thunk from 'redux-thunk';
import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchMovies,
  setFilterAndFetchMoviesIfNeeded,
  addFilter,
  removeFilter,
  resetPaging,
  resetFilters,
  searchMovie,
  changeSearchText,
} from './movies';
import reducers from '../reducers';

describe('Movies actions suite', () => {
  it('should return the right object when fetchMoviesRequest() is dispatched', () => {
    expect(fetchMoviesRequest()).toEqual({
      type: 'FETCH_MOVIES_REQUEST',
    });
  });

  it('should return the right object when fetchMoviesSuccess() is dispatched', () => {
    expect(fetchMoviesSuccess([])).toEqual({
      type: 'FETCH_MOVIES_SUCCESS',
      movies: [],
    });
  });

  it('should return the right object when fetchMoviesFailure() is dispatched', () => {
    expect(fetchMoviesFailure({})).toEqual({
      type: 'FETCH_MOVIES_FAILURE',
      error: {},
    });
  });

  it('should dispatch the right actions when fetchMovies() is successful', async () => {
    fetchMock.once('*', JSON.stringify({ results: [] }));

    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getDispatchedActions()).toEqual([
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });

  it('should call the search method if search text is not empty when fetchMovies() is dispatched', async () => {
    fetchMock.once('*', JSON.stringify({ results: [] }));

    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(changeSearchText('any text'));
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getDispatchedActions().slice(-2)).toEqual([
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });

  it('should dispatch the right actions when fetchMovies() is failure', async () => {
    fetchMock.once('*', 404);

    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getDispatchedActions()).toEqual([
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_FAILURE' }),
    ]);
  });

  it('should not dispatch fetchMovies() if movies are being loaded', async () => {
    fetchMock.once('*', JSON.stringify({ results: [] }));

    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(fetchMoviesRequest());
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getDispatchedActions().slice(-2)).not.toEqual([
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });

  it('should fail when calling the search method when fetchMovies() is dispatched', async () => {
    fetchMock.once('*', 404);

    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(changeSearchText('any text'));
    await mockStore.dispatch(fetchMovies());

    expect(mockStore.getDispatchedActions().slice(-2)).toEqual([
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_FAILURE' }),
    ]);
  });

  it('should add a filter if needed', async () => {
    fetchMock.once('*', JSON.stringify({ results: [] }));
    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(setFilterAndFetchMoviesIfNeeded('filter1', true));

    expect(mockStore.getDispatchedActions()).toEqual([
      expect.objectContaining({ type: 'ADD_FILTER' }),
      expect.objectContaining({ type: 'RESET_PAGING' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });

  it('should remove a filter if needed', async () => {
    fetchMock.once('*', JSON.stringify({ results: [] }));
    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(addFilter('filter1'));
    await mockStore.dispatch(setFilterAndFetchMoviesIfNeeded('filter1', false));

    expect(mockStore.getDispatchedActions().slice(-4)).toEqual([
      expect.objectContaining({ type: 'REMOVE_FILTER' }),
      expect.objectContaining({ type: 'RESET_PAGING' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });

  it('should do nothing if there is no filter', async () => {
    fetchMock.once('*', JSON.stringify({ results: [] }));
    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(setFilterAndFetchMoviesIfNeeded('filter1', false));

    expect(mockStore.getDispatchedActions()).toEqual([]);
  });

  it('should dispatch the right actions when searchMovie() is dispatched', async () => {
    fetchMock.once('*', JSON.stringify({ results: [] }));

    const mockStore = createMockStore(reducers, undefined, [thunk]);
    await mockStore.dispatch(searchMovie());

    expect(mockStore.getDispatchedActions()).toEqual([
      expect.objectContaining({ type: 'RESET_PAGING' }),
      expect.objectContaining({ type: 'RESET_FILTERS' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });

  it('should return the right object when addFilter() is dispatched', () => {
    expect(addFilter('fake filter')).toEqual({
      type: 'ADD_FILTER',
      filter: 'fake filter',
    });
  });

  it('should return the right object when removeFilter() is dispatched', () => {
    expect(removeFilter('fake filter')).toEqual({
      type: 'REMOVE_FILTER',
      filter: 'fake filter',
    });
  });

  it('should return the right object when resetPaging() is dispatched', () => {
    expect(resetPaging()).toEqual({
      type: 'RESET_PAGING',
    });
  });

  it('should return the right object when resetFilters() is dispatched', () => {
    expect(resetFilters()).toEqual({
      type: 'RESET_FILTERS',
    });
  });

  it('should return the right object when changeSearchText() is dispatched', () => {
    expect(changeSearchText()).toEqual({
      type: 'CHANGE_SEARCH_TEXT',
    });
  });
});
