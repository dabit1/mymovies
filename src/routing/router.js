import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import ModalSwitch from './modal-switch';
import routes from './routes';

const Router = ({ basename }) => (
  <BrowserRouter basename={basename}>
    <Route component={props => <ModalSwitch {...props} routes={routes} />} />
  </BrowserRouter>
);

Router.propTypes = {
  basename: PropTypes.string.isRequired,
};

export default Router;
