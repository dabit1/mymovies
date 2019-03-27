import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import MoviesFiltersListItem from './movies-filters-list-item';

export default class MoviesFiltersList extends Component {
  handleOnChange(active, filterId) {
    this.props.onChangeFilter(filterId, active);
    this.props.onPressFilter();
  }

  renderFilter(filter) {
    const { selectedFilters, isLoadingMovies } = this.props;

    return (
      <MoviesFiltersListItem
        key={filter.id}
        id={filter.id}
        onChange={active => this.handleOnChange(active, filter.id)}
        title={filter.name}
        active={selectedFilters.indexOf(filter.id) !== -1}
        disabled={isLoadingMovies}
      />
    );
  }

  render() {
    const { filters } = this.props;

    return (
      <div className="c-movies-filters-list">
        <List>
          {
            filters.map(filter => this.renderFilter(filter))
          }
        </List>
      </div>
    );
  }
}

MoviesFiltersList.propTypes = {
  onPressFilter: PropTypes.func,
  onChangeFilter: PropTypes.func,
  selectedFilters: PropTypes.arrayOf(PropTypes.number),
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoadingMovies: PropTypes.bool,
};

MoviesFiltersList.defaultProps = {
  onPressFilter: /* istanbul ignore next */ () => {},
  isLoadingMovies: false,
  onChangeFilter: /* istanbul ignore next */ () => {},
  selectedFilters: [],
};
