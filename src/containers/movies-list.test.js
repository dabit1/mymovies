import { createMockStore, mountConnectedComponent } from 'react-redux-test';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import { fetchMovies, fetchMoviesRequest } from '../redux/actions/movies';
import MoviesListConn from './movies-list';
import discoverMovieFake from '../../config/testing/fakes/discover-movie.json';

const setup = async () => {
  const store = createMockStore(reducers, undefined, [thunk]);

  fetchMock.once('*', JSON.stringify(discoverMovieFake));
  await store.dispatch(fetchMovies());

  const dispatchSpy = jest.spyOn(store, 'dispatch').mockImplementation();

  const wrapper = mountConnectedComponent(store, MoviesListConn);

  return { store, wrapper, dispatchSpy };
};

describe('MoviesList container suite', () => {
  it('should have an array prop with the movies', async () => {
    const { wrapper } = await setup();
    expect(wrapper.find('MoviesList').prop('movies')).toEqual(discoverMovieFake.results);
  });

  it('should dispatch an action when the more movies need to be fetched', async () => {
    const { store, wrapper, dispatchSpy } = await setup();

    wrapper.find('MoviesList').props().onFetchMoreMovies();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    const actionDispatched = store.getDispatchedActions().shift();
    expect(actionDispatched).toMatchObject({ ...fetchMoviesRequest() });
  });
});
