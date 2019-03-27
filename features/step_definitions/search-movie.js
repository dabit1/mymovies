import { When, Then } from 'cucumber';
import expect from 'expect';
import { mountConnectedComponent } from 'react-redux-test';
import { waitFor } from './helpers';
import SearchMovieConn from '../../src/containers/search-movie';
import searchMovieFake from '../../config/testing/fakes/search-movie.json';

// Seach by title
When('I search a movie by title', async function () {
  const searchMovie = mountConnectedComponent(this.store, SearchMovieConn);

  fetchMock.once('*', JSON.stringify(searchMovieFake));

  this.textToSearch = 'Avenger';
  searchMovie.find('input[type="text"]').simulate('change', { target: { value: this.textToSearch } });
  searchMovie.find('input[type="text"]').simulate('keyup', { key: 'Enter' });
  await waitFor(() => this.store.getState().movies.items.length > 0);
  this.moviesList.update();
});

Then('I will a list of results which match the text I searched', function () {
  const moviesListItems = this.moviesList.find('MoviesListItem');
  const moviesStored = this.store.getState().movies.items;

  moviesListItems.forEach((movie) => {
    const movieId = parseInt(movie.props().id, 10);
    const movieTitle = moviesStored.find(m => m.id === movieId).title;
    const movieOverview = moviesStored.find(m => m.id === movieId).overview;

    const matchText = new RegExp(this.textToSearch, 'i').test(movieTitle) ||
                      new RegExp(this.textToSearch, 'i').test(movieOverview);
    expect(matchText).toBeTruthy();
  });
});
