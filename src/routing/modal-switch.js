import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, matchPath } from 'react-router-dom';

export default class ModalSwitch extends Component {
  constructor(props) {
    super(props);

    if (this.isModal()) {
      // We need to know which screen is behind of the modal when the first location is a modal
      this.previousLocation = this.getModalPreviousLocation();
    }
  }

  componentWillUpdate() {
    this.previousLocation = this.props.location;
  }

  getModalPreviousLocation() {
    let previousLocation = this.props.location.pathname;
    let route = null;
    const checkIfMatch = r => matchPath(previousLocation, r);

    do {
      previousLocation = previousLocation.slice(0, previousLocation.lastIndexOf('/'));
      route = this.props.routes.find(checkIfMatch);
    } while (route === undefined && previousLocation);

    return { pathname: previousLocation };
  }

  isModal() {
    const { location } = this.props;
    const route = this.props.routes.find(r => matchPath(location.pathname, r));
    return route !== undefined && route.modal === true;
  }

  render() {
    const isModal = this.isModal();
    const { routes } = this.props;
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : this.props.location}>
          { routes.map(route => (!route.modal ? <Route {...route} key={`${route.path}key`} /> : null)) }
        </Switch>
        {
          isModal
          && routes.map(route => (route.modal ? <Route {...route} key={`${route.path}key`} /> : null))
        }
      </div>
    );
  }
}

ModalSwitch.propTypes = {
  routes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
