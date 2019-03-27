import { connect } from 'react-redux';
import FilterChips from '../components/features/movies-filters-list/filter-chips';
import { setFilterAndFetchMoviesIfNeeded } from '../redux/actions/movies';

const mapStateToProps = (state) => {
  const selectedFilters = [...state.movies.filters].map(filter =>
    state.genres.items.find(genre => genre.id === filter));

  return {
    selectedFilters,
    isLoadingMovies: state.movies.isLoading || !!state.movies.searchText.trim(),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteFilter: filterId => dispatch(setFilterAndFetchMoviesIfNeeded(filterId, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterChips);
