import { Given, When, Then } from 'cucumber';
import { client } from 'nightwatch-cucumber';
import { getHost } from './helpers/configs';

// View filters list
Given('I\'ve gone to homepage', async function () {
  await client.url(getHost());
  await client.waitForElementVisible('.c-movies-list-item', 4000);
});

When('I see the filters', async function () {
  let visible = false;
  await client.isVisible('button[aria-label="open drawer"]', (res) => {
    visible = res.value;
  });
  if (visible) {
    await client.click('button[aria-label="open drawer"]');
    await client.waitForElementVisible('.c-drawer.smdown .c-movies-filters-list-item', 4000);
  } else {
    await client.waitForElementVisible('.c-drawer .c-movies-filters-list-item', 4000);
  }
});

Then('I will see a checkbox per each filter', async function () {
  await client.assert.elementPresent('.c-movies-filters-list-item input[type="checkbox"]');
});

// View movies
When('I see the movies', async function () {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
});

Then('I will see a list with movies images and its titles', async function () {
  await client.waitForElementVisible('.c-movies-list-item img', 4000);
  await client.assert.visible('.c-movies-list-item img');
  await client.assert.visible('.c-movies-list-item h2');
});

// View more movies
When('I scroll down movies list', async function () {
  await client.elements('css selector', '.c-movies-list-item', (res) => {
    this.moviesLengthBeforeLoadMore = res.value.length;
  });
  await client.execute(function () {
    window.scrollTo(200, 2000);
  });
  await client.pause(2000);
});

Then('I will see more images', async function () {
  await client.elements('css selector', '.c-movies-list-item', async (res) => {
    await client.assert.ok(res.value.length > this.moviesLengthBeforeLoadMore);
  });
});

// View search box
When('I see the search box', async function () {
  await client.waitForElementVisible('.c-search-movie', 4000);
});

Then('I will see a input text', async function () {
  await client.assert.visible('.c-search-movie input[type="text"]');
});

// Movie details
When('I click on a movie', async function () {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
  await client.click('.c-movies-list-item');
});

Then('a modal box will be showed with the movie details', async function () {
  // checking if the url has changed
  await client.url(async (res) => {
    const regExp = `${getHost()}/movie-details/[0-9]+`;
    await client.assert.ok(new RegExp(regExp).test(res.value));
  });

  // checking elements visibles
  await client.assert.visible('.c-movie-details img'); // image
  await client.assert.visible('.c-movie-details h1'); // title
});
