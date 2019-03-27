import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchMovie from '../../containers/search-movie';

const Header = ({ handleDrawerToggle }) => (
  <div className="c-header">
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerToggle()}
        >
          <FilterListIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          My Movies
        </Typography>
        <SearchMovie />
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
