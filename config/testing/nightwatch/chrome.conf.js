const path = require('path');
const nightwatchCucumber = require('nightwatch-cucumber');
const chromedriverPath = require('chromedriver').path;
const seleniumServerPath = require('selenium-server').path;

nightwatchCucumber({
  cucumberArgs: [
    '--tags', 'not @mobile',
    '--format', 'node_modules/cucumber-pretty',
    '--require-module', 'babel-core/register',
    '--require-module', 'babel-polyfill',
    '--require', 'e2e-features/step_definitions',
    'e2e-features',
  ],
});

module.exports = {
  output_folder: 'reports/chrome',
  custom_commands_path: path.resolve(__dirname, 'custom-commands'),
  selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    cli_args: {
      'webdriver.chrome.driver': chromedriverPath,
    },
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            'window-size=1280,800',
          ],
        },
      },
    },
  },
};
