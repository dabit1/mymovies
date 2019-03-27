// to mock fetch calls
import fetchMock from 'fetch-mock/es5/server';

fetchMock.config = { ...fetchMock.config, overwriteRoutes: true };
global.fetchMock = fetchMock;
