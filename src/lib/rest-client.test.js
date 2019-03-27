import RestClient from './rest-client';

const fakeHost = 'https://fakeapihost.com';

describe('RestClient suite', () => {
  it('should return a promise', async () => {
    fetchMock.once('*', JSON.stringify([]));
    await expect(new RestClient(fakeHost, '', '').get('/fakeendpoint')).toBeInstanceOf(Promise);
  });

  it('should add the apikey to the endpoint', () => {
    fetchMock.once('*', JSON.stringify([]));
    const client = new RestClient(fakeHost, 'apikey', '');
    return client.get('/fakeendpoint').then(data => expect(data.url.indexOf('?api_key=') !== -1).toBeTruthy());
  });

  it('should add the apikey to the endpoint also if there are already other parameters', () => {
    fetchMock.once('*', JSON.stringify([]));
    const client = new RestClient(fakeHost, 'apikey', '');
    return client.get('/fakeendpoint?foo=bar').then(data => expect(data.url.indexOf('?foo=bar&api_key=') !== -1).toBeTruthy());
  });

  it('should have a method to make a get request', async () => {
    fetchMock.once('*', JSON.stringify([]));
    await expect(new RestClient(fakeHost, '', '').get('/fakeendpoint')).resolves.toEqual(expect.objectContaining({ body: '[]' }));
  });

  it('should reject in case of get request fails', async () => {
    fetchMock.once('*', { throws: new Error('error') });
    await expect(new RestClient(fakeHost, '', '').get('/fakeendpoint')).rejects.toEqual(new Error('error'));
  });

  it('should reject in case of get request get an unsuccessful response', async () => {
    fetchMock.once('*', 500);
    await expect(new RestClient(fakeHost, '', '').get('/fakeendpoint')).rejects.toEqual(expect.objectContaining({ status: 500 }));
  });
});
