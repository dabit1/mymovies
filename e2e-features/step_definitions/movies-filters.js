import { Given, When, Then } from 'cucumber';
import { client } from 'nightwatch-cucumber';

// Select filter
When('I select a filter', async function () {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
  await client.getElementsAttribute('.c-movies-list-item img', 'src', (res) => { this.prevSrcAttributes = res; });

  let visible = false;
  await client.isVisible('button[aria-label="open drawer"]', (res) => {
    visible = res.value;
  });
  if (visible) {
    await client.click('button[aria-label="open drawer"]');
    await client.pause(500);
    await client.click('.c-drawer.smdown .c-movies-filters-list-item');
  } else {
    await client.click('.c-movies-filters-list-item');
  }
  await client.pause(2000);
});

Then('this filter will be selected', async function () {
  await client.expect.element('.c-movies-filters-list-item input').to.be.selected;
});

Then('movies will be filtered by the filter selected', async function () {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
  await client.getElementsAttribute('.c-movies-list-item img', 'src', (res) => { this.currentSrcAttributes = res; });
  await client.assert.notDeepEqual(this.prevSrcAttributes, this.currentSrcAttributes);
});

// Deselect filter
Given('I\'ve selectd a filter', async function () {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
  await client.getElementsAttribute('.c-movies-list-item img', 'src', (res) => { this.prevSrcAttributes = res; });
  await client.click('.c-movies-filters-list-item input');
});

When('I deselect this filter', async function () {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
  await client.click('.c-movies-filters-list-item input');
});

Then('this filter will be deselected', async function () {
  await client.expect.element('.c-movies-filters-list-item input').to.not.be.selected;
});

Then('movies will not be filtered', async function () {
  await client.waitForElementVisible('.c-movies-list-item', 4000);
  await client.getElementsAttribute('.c-movies-list-item img', 'src', (res) => { this.currentSrcAttributes = res; });
  await client.assert.deepEqual(this.prevSrcAttributes, this.currentSrcAttributes);
});
