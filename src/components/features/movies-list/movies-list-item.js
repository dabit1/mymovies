import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import fillArray from '../../../helpers/fill-array';

const MoviesListItem = ({
  title,
  voteAverage,
  releaseDate,
  onPress,
  image,
}) =>
  (
    <div className="c-movies-list-item" onClick={onPress} onKeyPress={onPress} role="button" tabIndex="0">
      <img src={image} alt="" />
      <div>
        <h2 className="c-movies-list-item__title">{title}</h2>
        <em className="c-movies-list-item__subtitle">
          <span>
            {
              fillArray(Math.round(voteAverage.toFixed(2) / 2), i => (
                <StarIcon
                  style={{ fontSize: '1.2em' }}
                  className="c-movies-list-item__star-icon"
                  key={i}
                />
              ))
            }
          </span>
          { new Date(releaseDate).getFullYear() }
        </em>
      </div>
    </div>
  );

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

MoviesListItem.defaultProps = {
  image: '',
};

export default MoviesListItem;
