const initialState = {
  envVars: {},
  site: {},
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ENV_VARS':
      return { ...state, envVars: { ...action.envVars } };
    case 'FETCH_SITE_SETTINGS': {
      return {
        ...state,
        site: { ...action.site },
      };
    }
    default:
      return state;
  }
};

export default settings;
