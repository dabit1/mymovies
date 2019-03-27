import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const InitialLoading = () => (
  <div className="c-initial-loading">
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default InitialLoading;
