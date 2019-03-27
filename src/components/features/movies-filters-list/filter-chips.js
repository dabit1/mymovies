import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

class FilterChips extends Component {
  handleDelete(filterId) {
    if (!this.props.isLoadingMovies) {
      this.props.onDeleteFilter(filterId);
    }
  }

  render() {
    if (!this.props.selectedFilters.length) return null;

    return (
      <Paper className="c-filter-chips">
        {
          this.props.selectedFilters.map(filter => (
            <Chip
              key={filter.id}
              label={filter.name}
              onDelete={() => this.handleDelete(filter.id)}
              className="c-filter-chips__chip"
            />
          ))
        }
      </Paper>
    );
  }
}

FilterChips.propTypes = {
  isLoadingMovies: PropTypes.bool,
  onDeleteFilter: PropTypes.func,
  selectedFilters: PropTypes.arrayOf(PropTypes.object),
};

FilterChips.defaultProps = {
  isLoadingMovies: false,
  onDeleteFilter: /* istanbul ignore next */ () => {},
  selectedFilters: [],
};

export default FilterChips;
