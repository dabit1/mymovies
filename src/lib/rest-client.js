export default class RestClient {
  constructor(host, apiKey, language) {
    this.host = host;
    this.apiKey = apiKey;
    this.language = language;
  }

  get(endpoint) {
    const url = `${this.host}${endpoint}${endpoint.indexOf('?') !== -1 ? '&' : '?'}api_key=${this.apiKey}&language=${this.language}`;
    /* istanbul ignore next */ return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => (res.status !== 200 ? reject(res) : resolve(res)))
        .catch(res => reject(res));
    });
  }
}
