import { createMockStore, mountConnectedComponent } from 'react-redux-test';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import { fetchGenres } from '../redux/actions/genres';
import MoviesFiltersListConn from './movies-filters-list';
import genresFake from '../../config/testing/fakes/genres.json';
import discoverMovieGenre18Fake from '../../config/testing/fakes/discover-movie-genre-18.json';

const setup = async () => {
  const store = createMockStore(reducers, undefined, [thunk]);

  fetchMock.once('*', JSON.stringify(genresFake));
  await store.dispatch(fetchGenres());

  const dispatchSpy = jest.spyOn(store, 'dispatch');

  const wrapper = mountConnectedComponent(store, MoviesFiltersListConn);

  return { store, wrapper, dispatchSpy };
};

describe('MoviesFiltersList container suite', () => {
  it('should have an array prop with the filters', async () => {
    const { wrapper } = await setup();
    expect(wrapper.find('MoviesFiltersList').prop('filters')).toEqual(genresFake.genres);
  });

  it('should have an array prop with the selected filters', async () => {
    const { wrapper } = await setup();
    expect(wrapper.find('MoviesFiltersList').prop('selectedFilters')).toEqual([]);
  });

  it('should a prop with the loading movies state', async () => {
    const { wrapper } = await setup();
    expect(wrapper.find('MoviesFiltersList').prop('isLoadingMovies')).toEqual(false);
  });

  it('should dispatch an action when the movies have to be fetched after filtering', async () => {
    const { store, wrapper, dispatchSpy } = await setup();

    fetchMock.once('*', JSON.stringify(discoverMovieGenre18Fake));
    await wrapper.find('MoviesFiltersList').props().onChangeFilter(1, true);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(store.getDispatchedActions().slice(2)).toEqual([
      expect.objectContaining({ type: 'ADD_FILTER' }),
      expect.objectContaining({ type: 'RESET_PAGING' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });
});
