/* eslint-disable global-require */

if (!global.cucumberSetupDone) {
  require('./shim');
  require('./jsdom');
  require('./enzyme');
  require('./fetch');
  require('./require-hacker');
}

global.cucumberSetupDone = true;
