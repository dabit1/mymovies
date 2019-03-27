export const fetchSiteSettings = () => (dispatch) => {
  const siteSettings = require('../../../config/site-settings'); // eslint-disable-line global-require

  return dispatch({
    type: 'FETCH_SITE_SETTINGS',
    site: siteSettings,
  });
};

export const fetchEnvVars = targetEnv => (dispatch) => {
  const envVars = require(`../../../config/env-vars/${targetEnv}`); // eslint-disable-line global-require, import/no-dynamic-require
  return dispatch({
    type: 'FETCH_ENV_VARS',
    envVars,
  });
};
