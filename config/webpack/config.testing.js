const prodConfig = require('./config.production.js');
const { basename } = require('../env-vars/testing');

module.exports = (env, argv) => {
  const config = prodConfig(env, argv, 'docs-testing');
  return {
    ...config,
    output: {
      ...config.output,
      publicPath: `${basename}/` || '/',
    },
  };
};
