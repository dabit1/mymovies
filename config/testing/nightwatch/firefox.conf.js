const path = require('path');
const nightwatchCucumber = require('nightwatch-cucumber');
const geckodriverPath = require('geckodriver').path;
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
  output_folder: 'reports/firefox',
  custom_commands_path: path.resolve(__dirname, 'custom-commands'),
  selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    cli_args: {
      'webdriver.gecko.driver': geckodriverPath,
    },
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'firefox',
      },
    },
  },
};
