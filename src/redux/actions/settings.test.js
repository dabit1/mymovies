import { createMockStore } from 'react-redux-test';
import thunk from 'redux-thunk';
import { fetchEnvVars, fetchSiteSettings } from './settings';

describe('Settings actions suite', () => {
  it('should dispatch the right action when fetchEnvVars() is called', () => {
    const mockStore = createMockStore(null, undefined, [thunk]);

    jest.mock('../../../config/site-settings.js', () => ({ test: true }));

    // in prod
    mockStore.dispatch(fetchEnvVars('production'));
    expect(mockStore.getDispatchedActions().pop()).toEqual(expect.objectContaining({ type: 'FETCH_ENV_VARS' }));

    // in testing
    mockStore.dispatch(fetchEnvVars('testing'));
    expect(mockStore.getDispatchedActions().pop()).toEqual(expect.objectContaining({ type: 'FETCH_ENV_VARS' }));

    // in dev
    mockStore.dispatch(fetchEnvVars('development'));
    expect(mockStore.getDispatchedActions().pop()).toEqual(expect.objectContaining({ type: 'FETCH_ENV_VARS' }));
  });

  it('should dispatch the right action when fetchSiteSettings() is called', () => {
    const mockStore = createMockStore(null, undefined, [thunk]);

    jest.mock('../../../config/site-settings.js', () => ({ test: true }));
    mockStore.dispatch(fetchSiteSettings());

    expect(mockStore.getDispatchedActions()).toEqual([
      expect.objectContaining({ type: 'FETCH_SITE_SETTINGS' }),
    ]);
  });
});
