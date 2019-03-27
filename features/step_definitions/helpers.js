import { createMockStore, mountConnectedComponent } from 'react-redux-test';
import thunk from 'redux-thunk';

import reducers from '../../src/redux/reducers';
import { fetchMovies } from '../../src/redux/actions/movies';
import MoviesListConn from '../../src/containers/movies-list';

import discoverMovieFake from '../../config/testing/fakes/discover-movie.json';

export const mockFetchMovies = (page = 1) => {
  if (page > 1) {
    const resultsEdited = discoverMovieFake.results.map((movie, i) =>
      ({ ...movie, id: 50 + (discoverMovieFake.results.length * page) + i + 1 }));
    fetchMock.once('*', JSON.stringify({ ...discoverMovieFake, results: resultsEdited }));
  } else {
    fetchMock.once('*', JSON.stringify(discoverMovieFake));
  }
};

// setup the basics to work
export const setup = async function () {
  const store = createMockStore(reducers, undefined, [thunk]);

  mockFetchMovies();
  await store.dispatch(fetchMovies());

  const moviesList = mountConnectedComponent(store, MoviesListConn);

  return { store, moviesList };
};

export const triggerInfiniteScrollEvent = (moviesList) => {
  moviesList.find('InfiniteScroll').props().loadMore();
  moviesList.update();
};

export const waitFor = boolFunc =>
  new Promise((resolve) => {
    const clearId = setInterval(() => {
      if (boolFunc()) {
        clearInterval(clearId);
        resolve();
      }
    }, 50);
  });
