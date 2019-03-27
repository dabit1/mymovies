import { When, Then } from 'cucumber';
import { client } from 'nightwatch-cucumber';

//  Search movie
When('I type {string} on search box', async function (text) {
  await client.setValue('.c-search-movie input[type=text]', text);
});

When('I type the enter key', async function () {
  await client.setValue('.c-search-movie input[type=text]', client.Keys.ENTER);
});

Then('movies related with {string} will be listed', async function (text) {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
  let titles = null;
  await client.getElementsText('.c-movies-list-item h2', (res) => { titles = res; });

  let allMatches = true;
  titles.forEach(async (title) => {
    if (!new RegExp(text, 'i').test(title.replace(/ /g, ''))) {
      allMatches = false;
    }
  });
  await client.assert.ok(allMatches);
});
