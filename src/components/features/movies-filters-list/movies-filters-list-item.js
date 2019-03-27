import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const MoviesFiltersListItem = ({
  title,
  onChange,
  active,
  disabled,
}) =>
  (
    <div className={!disabled ? 'c-movies-filters-list-item' : 'c-movies-filters-list-item disabled'}>
      <ListItem dense button={!disabled} onClick={() => !disabled && onChange(!active)}>
        <ListItemText primary={title} />
        <Checkbox
          className="c-movies-filters-list-item__checkbox"
          checked={active}
          disabled={disabled}
        />
      </ListItem>
    </div>
  );

MoviesFiltersListItem.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

MoviesFiltersListItem.defaultProps = {
  onChange: /* istanbul ignore next */ () => {},
  active: false,
  disabled: false,
};

export default MoviesFiltersListItem;
