import MoviesApi from '../../lib/movies-api';

export const fetchGenresRequest = () => ({
  type: 'FETCH_GENRES_REQUEST',
});

export const fetchGenresSuccess = genres => ({
  type: 'FETCH_GENRES_SUCCESS',
  genres,
});

export const fetchGenresFailure = error => ({
  type: 'FETCH_GENRES_FAILURE',
  error,
});

export const fetchGenres = () => (dispatch, getState) => {
  dispatch(fetchGenresRequest());
  const { envVars, site } = getState().settings;

  return new MoviesApi(envVars.apiHost, envVars.apiKey, site.language).genres()
    .then(response => response.json())
    .then(responseJson => dispatch(fetchGenresSuccess(responseJson.genres)))
    .catch(response => dispatch(fetchGenresFailure(response)));
};
