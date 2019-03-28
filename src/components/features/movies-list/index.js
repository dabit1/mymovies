import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';
import MoviesListItem from './movies-list-item';
import noPosterImg from '../../../img/no-poster.jpg';

const MOVIES_PER_PAGE = 20;

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      hasMoreToFetch: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.apiPage !== 0 && this.props.apiPage === 0) {
      this.setState({ page: 1 }); // eslint-disable-line react/no-did-update-set-state
    }

    if (prevProps.apiPage !== this.props.apiPage && !this.state.hasMoreToFetch) {
      this.setState({ hasMoreToFetch: true }); // eslint-disable-line react/no-did-update-set-state
    } else if (
      prevProps.isLoadingMovies && !this.props.isLoadingMovies &&
      this.props.movies.length === prevProps.movies.length &&
      this.state.hasMoreToFetch
    ) {
      this.setState({ hasMoreToFetch: false }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  onPressMovie(movie) {
    this.props.history.push(`/movie-details/${movie.id}`, {
      modal: true,
      movie,
    });
  }

  loadMore(page, isLoadingMovies) {
    if (!isLoadingMovies) {
      this.setState({ page });

      const hasMore = this.state.page * MOVIES_PER_PAGE < this.props.movies.length;

      if (!hasMore && this.state.hasMoreToFetch) {
        this.props.onFetchMoreMovies();
      }
    }
  }

  renderMovie(movie) {
    const imageSrc = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : noPosterImg;

    return (
      <MoviesListItem
        id={movie.id}
        releaseDate={movie.release_date}
        popularity={movie.popularity}
        title={movie.title}
        voteAverage={movie.vote_average}
        key={movie.id}
        onPress={() => this.onPressMovie(movie)}
        image={imageSrc}
      />
    );
  }

  render() {
    const { movies, isLoadingMovies } = this.props;

    return (
      <div className="c-movies-list">
        <InfiniteScroll
          initialLoad={false}
          pageStart={1}
          loadMore={() => this.loadMore(this.state.page + 1, isLoadingMovies)}
          hasMore
          loader={<span key={0} style={{ display: 'none' }} />} /* it does not work as expected */
        >
          {
            movies.slice(0, this.state.page * MOVIES_PER_PAGE)
              .map(movie => this.renderMovie(movie))
          }
        </InfiniteScroll>
        { isLoadingMovies && <CircularProgress className="c-movies-list__progress" size={40} thickness={5} /> }
      </div>
    );
  }
}

MoviesList.propTypes = {
  onFetchMoreMovies: PropTypes.func,
  isLoadingMovies: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  apiPage: PropTypes.number.isRequired,
};

MoviesList.defaultProps = {
  onFetchMoreMovies: /* istanbul ignore next */ () => {},
  isLoadingMovies: false,
  history: null,
};
