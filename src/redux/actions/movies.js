import MoviesApi from '../../lib/movies-api';

export const fetchMoviesRequest = () => ({
  type: 'FETCH_MOVIES_REQUEST',
});

export const fetchMoviesSuccess = movies => ({
  type: 'FETCH_MOVIES_SUCCESS',
  movies,
});

export const fetchMoviesFailure = error => ({
  type: 'FETCH_MOVIES_FAILURE',
  error,
});

export const fetchMovies = () => (dispatch, getState) => {
  if (getState().movies.isLoading) return Promise.resolve();

  dispatch(fetchMoviesRequest());

  const { envVars, site } = getState().settings;
  const page = getState().movies.page + 1;

  if (getState().movies.searchText) {
    return new MoviesApi(envVars.apiHost, envVars.apiKey, site.language)
      .search(getState().movies.searchText, page)
      .then(response => response.json())
      .then(responseJson => dispatch(fetchMoviesSuccess(responseJson.results)))
      .catch(response => dispatch(fetchMoviesFailure(response)));
  }

  const filters = [...getState().movies.filters];
  return new MoviesApi(envVars.apiHost, envVars.apiKey, site.language)
    .discover(page, filters)
    .then(response => response.json())
    .then(responseJson => dispatch(fetchMoviesSuccess(responseJson.results)))
    .catch(response => dispatch(fetchMoviesFailure(response)));
};

export const resetPaging = () => ({
  type: 'RESET_PAGING',
});

export const resetFilters = () => ({
  type: 'RESET_FILTERS',
});

export const addFilter = filter => ({
  type: 'ADD_FILTER',
  filter,
});

export const removeFilter = filter => ({
  type: 'REMOVE_FILTER',
  filter,
});

export const setFilterAndFetchMoviesIfNeeded = (filter, active) => (dispatch, getState) => {
  if (active && getState().movies.filters.indexOf(filter) === -1) {
    dispatch(addFilter(filter));
    dispatch(resetPaging());
    return dispatch(fetchMovies());
  } else if (!active && getState().movies.filters.indexOf(filter) !== -1) {
    dispatch(removeFilter(filter));
    dispatch(resetPaging());
    return dispatch(fetchMovies());
  }

  /* istanbul ignore next */return Promise.resolve();
};

export const searchMovie = () => (dispatch) => {
  dispatch(resetPaging());
  dispatch(resetFilters());

  return dispatch(fetchMovies());
};

export const changeSearchText = text => ({
  type: 'CHANGE_SEARCH_TEXT',
  text,
});
