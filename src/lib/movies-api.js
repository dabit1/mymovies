import RestClient from './rest-client';

export default class MoviesApi extends RestClient {
  discover(page = 1, filters = []) {
    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    let endpoint = `/discover/movie?sort_by=popularity.desc&page=${page}&primary_release_date.lte=${today}`;
    if (filters && filters.length) {
      endpoint += `&with_genres=${filters.join(',')}`;
    }
    return this.get(endpoint);
  }

  search(query, page = 1) {
    const endpoint = `/search/movie?page=${page}&query=${query}`;
    return this.get(endpoint);
  }

  genres() {
    const endpoint = '/genre/movie/list';
    return this.get(endpoint);
  }
}
