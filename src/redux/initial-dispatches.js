import { fetchEnvVars, fetchSiteSettings } from './actions/settings';
import { fetchGenres } from './actions/genres';
import { fetchMovies } from './actions/movies';

const initialDispatches = async (store) => {
  store.dispatch(fetchEnvVars(process.env.TARGET_ENV));
  store.dispatch(fetchSiteSettings());
  await store.dispatch(fetchGenres());
  await store.dispatch(fetchMovies());
};

export default initialDispatches;
