import envVars from '../../../config/env-vars/development';

export const getHost = () => // eslint-disable-line import/prefer-default-export
  envVars.host;
