/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import StarIcon from '@material-ui/icons/Star';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import fillArray from '../../helpers/fill-array';
import noPosterImg from '../../img/no-poster.jpg';

const MovieDetails = (props) => {
  const {
    title, overview, poster_path,
    vote_average,
  } = props.location.state.movie;

  /* istanbul ignore next */
  const imageSrc = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : noPosterImg;

  return (
    <Modal open onClose={() => props.history.goBack()}>
      <div className="c-movie-details">
        <div>
          <Button onClick={() => props.history.goBack()} className="c-movie-details__close-btn" variant="contained" color="primary">
            Go back
            <CloseIcon />
          </Button>
          <h1 className="c-movie-details__title">{title}</h1>
          <em>
            {
              fillArray(Math.round(vote_average.toFixed(2) / 2), i => (
                <StarIcon
                  style={{ fontSize: '1.2em' }}
                  className="c-movies-list-item__star-icon"
                  key={i}
                />
              ))
            }
          </em>
          { overview && <p className="c-movie-details__overview">{overview}</p> }
        </div>
        <img src={imageSrc} alt={title} className="c-movie-details__img" />
      </div>
    </Modal>
  );
};

MovieDetails.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

MovieDetails.defaultProps = {
  location: null,
  history: null,
};

export default MovieDetails;
