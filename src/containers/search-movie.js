import { connect } from 'react-redux';
import SearchMovie from '../components/features/search-movie';
import { searchMovie, changeSearchText } from '../redux/actions/movies';

const mapStateToProps = state => ({
  value: state.movies.searchText,
});

const mapDispatchToProps = dispatch => ({
  onChangeText: text => dispatch(changeSearchText(text)),
  onSubmit: () => dispatch(searchMovie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
