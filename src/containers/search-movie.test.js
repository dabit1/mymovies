import { createMockStore, mountConnectedComponent } from 'react-redux-test';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';
import { fetchSiteSettings, fetchEnvVars } from '../redux/actions/settings';
import SearchMovieConn from './search-movie';
import searchMovieFake from '../../config/testing/fakes/search-movie.json';

const setup = async () => {
  const store = createMockStore(reducers, undefined, [thunk]);

  await store.dispatch(fetchSiteSettings());
  await store.dispatch(fetchEnvVars('development'));

  const dispatchSpy = jest.spyOn(store, 'dispatch');

  const wrapper = mountConnectedComponent(store, SearchMovieConn);

  return { store, wrapper, dispatchSpy };
};

describe('SearchMovie container suite', () => {
  it('should dispatch an action when text is changed', async () => {
    const { wrapper, dispatchSpy } = await setup();

    wrapper.find('SearchMovie').props().onChangeText('any text');
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
  });

  it('should dispatch an action when search is submitted', async () => {
    const { store, wrapper, dispatchSpy } = await setup();

    fetchMock.once('*', JSON.stringify(searchMovieFake));
    await wrapper.find('SearchMovie').props().onSubmit('any text');

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(store.getDispatchedActions().slice(-4)).toEqual([
      expect.objectContaining({ type: 'RESET_PAGING' }),
      expect.objectContaining({ type: 'RESET_FILTERS' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_REQUEST' }),
      expect.objectContaining({ type: 'FETCH_MOVIES_SUCCESS' }),
    ]);
  });
});
