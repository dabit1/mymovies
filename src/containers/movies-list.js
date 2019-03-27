import { connect } from 'react-redux';
import MoviesList from '../components/features/movies-list';
import { fetchMovies } from '../redux/actions/movies';

const mapStateToProps = state => ({
  movies: state.movies.items,
  isLoadingMovies: state.movies.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onFetchMoreMovies: () => dispatch(fetchMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
