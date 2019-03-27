import { createMockStore, mountConnectedComponent } from 'react-redux-test';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import { fetchGenres } from '../redux/actions/genres';
import { setFilterAndFetchMoviesIfNeeded } from '../redux/actions/movies';
import FilterChipsConn from './filter-chips';
import genresFake from '../../config/testing/fakes/genres.json';
import discoverMovieGenre18Fake from '../../config/testing/fakes/discover-movie-genre-18.json';

const setup = async () => {
  const store = createMockStore(reducers, undefined, [thunk]);

  fetchMock.once('*', JSON.stringify(genresFake));
  await store.dispatch(fetchGenres());

  fetchMock.once('*', JSON.stringify(discoverMovieGenre18Fake));
  await store.dispatch(setFilterAndFetchMoviesIfNeeded(28, true));

  const dispatchSpy = jest.spyOn(store, 'dispatch');

  const wrapper = mountConnectedComponent(store, FilterChipsConn);

  return { store, wrapper, dispatchSpy };
};

describe('FilterChips container suite', () => {
  it('should have an array prop with the selected filters', async () => {
    const { wrapper } = await setup();
    expect(wrapper.find('FilterChips').prop('selectedFilters')).toEqual([{ id: 28, name: 'Action' }]);
  });

  it('should a prop with the loading movies state', async () => {
    const { wrapper } = await setup();
    expect(wrapper.find('FilterChips').prop('isLoadingMovies')).toEqual(false);
  });

  it('should dispatch an action when the chip is deleted', async () => {
    const { store, wrapper, dispatchSpy } = await setup();

    fetchMock.once('*', JSON.stringify({}));
    wrapper.find('Chip').props().onDelete();

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(store.getDispatchedActions().slice(-3)).toEqual([
      expect.objectContaining({ type: 'REMOVE_FILTER' }),
      expect.objectContaining({ type: 'RESET_PAGING' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
    ]);
  });
});
