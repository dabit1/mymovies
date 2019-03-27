import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import MoviesFiltersList from '../../containers/movies-filters-list';
import MoviesList from '../../containers/movies-list';
import Header from '../layout/header';
import FilterChips from '../../containers/filter-chips';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileOpen: false,
    };
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  closeDrawer() {
    this.setState({ mobileOpen: false });
  }

  render() {
    const { classes, history } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <MoviesFiltersList onPressFilter={/* istanbul ignore next */ () => this.closeDrawer()} />
      </div>
    );

    return (
      <div className="c-home">
        <Header handleDrawerToggle={/* istanbul ignore next */ () => this.handleDrawerToggle()} />
        <Hidden mdUp>
          <Drawer
            className="c-drawer smdown"
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={/* istanbul ignore next */ () => this.handleDrawerToggle()}
            classes={{ paper: 'c-drawer__paper' }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className="c-drawer"
            variant="permanent"
            classes={{ paper: 'c-drawer__paper' }}
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className="content">
          <div className={classes.toolbar} />
          <FilterChips />
          <MoviesList history={history} />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

Home.defaultProps = {
  history: null,
};

export default withStyles(styles, { withTheme: true })(Home);
