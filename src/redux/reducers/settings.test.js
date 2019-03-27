import { createMockStore } from 'react-redux-test';
import thunk from 'redux-thunk';
import reducer from './settings';
import { fetchEnvVars, fetchSiteSettings } from '../actions/settings';

const fakeInitialState = {
  envVars: {},
  site: {},
};

const setupStore = () => {
  const mockStore = createMockStore(reducer, undefined, [thunk]);
  return mockStore;
};

describe('Settings reducer suite', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(fakeInitialState);
  });

  it('should store environment variables', () => {
    const mockStore = setupStore();
    jest.mock('../../../config/site-settings.js', () => ({ test: true }));
    mockStore.dispatch(fetchEnvVars('development'));

    expect(Object.keys(mockStore.getState().envVars).length).toBeGreaterThan(0);
  });

  it('should store site settings', () => {
    const mockStore = setupStore();
    jest.mock('../../../config/site-settings.js', () => ({ test: true }));
    mockStore.dispatch(fetchSiteSettings());

    expect(Object.keys(mockStore.getState().site).length).toBeGreaterThan(0);
  });
});
