import { Given, When, Then } from 'cucumber';
import expect from 'expect';
import { mountConnectedComponent } from 'react-redux-test';
import { waitFor } from './helpers';
import { fetchGenres } from '../../src/redux/actions/genres';
import MoviesFiltersConn from '../../src/containers/movies-filters-list';
import genresFake from '../../config/testing/fakes/genres.json';
import discoverMovieGenre18Fake from '../../config/testing/fakes/discover-movie-genre-18.json';
import discoverMovieGenre1836Fake from '../../config/testing/fakes/discover-movie-genre-18-36.json';

const filterPerGenre = async function (genreId, moviesFake) {
  fetchMock.once('*', JSON.stringify(genresFake));
  await this.store.dispatch(fetchGenres());

  const moviesFilters = mountConnectedComponent(this.store, MoviesFiltersConn);

  fetchMock.once('*', JSON.stringify(moviesFake));
  moviesFilters.find(`MoviesFiltersListItem[id=${genreId}] ListItem`).simulate('click');
  await waitFor(() => this.store.getState().movies.items.length > 0);
  this.moviesList.update();
};

// Filter per one genre
When('I filter per one genre', async function () {
  this.genreIdToFilter = 18;
  await filterPerGenre.apply(this, [this.genreIdToFilter, discoverMovieGenre18Fake]);
});

Then('all movies will have this genre', function () {
  const moviesListItems = this.moviesList.find('MoviesListItem');

  const moviesStored = this.store.getState().movies.items;
  moviesListItems.forEach((movie) => {
    const movieId = parseInt(movie.props().id, 10);
    const movieGenres = moviesStored.find(m => m.id === movieId).genre_ids;
    expect(movieGenres).toContain(this.genreIdToFilter);
  });
});

// Filter per two genres
Given('I\'ve filtered per one genre', async function () {
  this.genreIdToFilter1 = 18;
  await filterPerGenre.apply(this, [this.genreIdToFilter1, discoverMovieGenre18Fake]);
});

When('I filter per another genre', async function () {
  this.genreIdToFilter2 = 36;
  await filterPerGenre.apply(this, [this.genreIdToFilter2, discoverMovieGenre1836Fake]);
});

Then('all movies will have the two genres', function () {
  const moviesListItems = this.moviesList.find('MoviesListItem');
  const moviesStored = this.store.getState().movies.items;

  moviesListItems.forEach((movie) => {
    const movieId = parseInt(movie.props().id, 10);
    const movieGenres = moviesStored.find(m => m.id === movieId).genre_ids;

    expect(movieGenres).toContain(this.genreIdToFilter1);
    expect(movieGenres).toContain(this.genreIdToFilter2);
  });
});
