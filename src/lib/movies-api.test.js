import MoviesApi from './movies-api';

const fakeHost = 'https://fakeapihost.com';

describe('MoviesApi suite', () => {
  it('should have a static method to fetch discover movies', () => {
    fetchMock.once('*', JSON.stringify([]));
    return new MoviesApi(fakeHost, '', '').discover().then(res => res.json()).then(res => expect(res).toEqual([]));
  });

  it('should add filters to the endpoint if they are passed', () => {
    fetchMock.once('*', JSON.stringify([]));
    return new MoviesApi(fakeHost, '', '').discover(1, ['filter1', 'filter2']).then(res => expect(res.url.indexOf('filter1') !== -1).toBeTruthy());
  });

  it('should reject in case of fetch discover movies was failed', () => {
    fetchMock.once('*', 500);
    return new MoviesApi(fakeHost, '', '').discover().catch(res => expect(res.status).toEqual(500));
  });

  it('should have a static method to fetch movies genres', () => {
    fetchMock.once('*', JSON.stringify([]));
    return new MoviesApi(fakeHost, '', '').genres().then(res => res.json()).then(res => expect(res).toEqual([]));
  });

  it('should reject in case of fetch movies genres was failed', () => {
    fetchMock.once('*', 500);
    return new MoviesApi(fakeHost, '', '').genres().catch(res => expect(res.status).toEqual(500));
  });

  it('should have a static method to search a movie', () => {
    fetchMock.once('*', JSON.stringify([]));
    return new MoviesApi(fakeHost, '', '').search().then(res => res.json()).then(res => expect(res).toEqual([]));
  });

  it('should reject in case of search a movie was failed', () => {
    fetchMock.once('*', 500);
    return new MoviesApi(fakeHost, '', '').search().catch(res => expect(res.status).toEqual(500));
  });
});
