import { Given, When, Then } from 'cucumber';
import expect from 'expect';
import { setup, triggerInfiniteScrollEvent, mockFetchMovies } from './helpers';

// Get movies list
Given('I\'ve got the movies list', async function () {
  const { moviesList, store } = await setup();

  this.store = store;
  this.moviesList = moviesList;
});

Then('the movies will be ordered by popularity descendant', function () {
  const moviesListItems = this.moviesList.find('MoviesListItem');

  moviesListItems.forEach((movie, index) => {
    if (index) {
      const currentMoviePopularity = movie.props().popularity;
      const prevMoviePopularity = moviesListItems.at(index - 1).props().popularity;
      expect(Number(currentMoviePopularity)).toBeLessThanOrEqual(Number(prevMoviePopularity));
    }
  });
});

// Fetch more movies
When('I get the page number 2', async function () {
  mockFetchMovies(2);
  this.moviesBeforeScroll = this.moviesList.find('MoviesListItem').length;
  triggerInfiniteScrollEvent(this.moviesList);
});

Then('more movies will be fetched', async function () {
  const moviesSecondFetchLength = this.store.getState().movies.items.length;
  expect(moviesSecondFetchLength).toBeGreaterThan(this.moviesBeforeScroll);
});
