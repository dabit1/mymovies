import { connect } from 'react-redux';
import MoviesFiltersList from '../components/features/movies-filters-list';
import { setFilterAndFetchMoviesIfNeeded } from '../redux/actions/movies';

const mapStateToProps = state => ({
  filters: state.genres.items,
  selectedFilters: state.movies.filters,
  isLoadingMovies: state.movies.isLoading || !!state.movies.searchText.trim(),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: (filterId, active) => dispatch(setFilterAndFetchMoviesIfNeeded(filterId, active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesFiltersList);
