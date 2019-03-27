import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';

const SearchMovie = ({ value, onSubmit, onChangeText }) =>
  (
    <div className="c-search-movie">
      <SearchBar
        onCancelSearch={() => {
          onChangeText('');
          onSubmit();
        }}
        onChange={(val) => {
          onChangeText(val);
          if (!val.trim()) {
            onSubmit();
          }
        }}
        onRequestSearch={() => value.trim() && onSubmit()}
        placeholder="Search..."
        value={value}
        style={{
          margin: '0 auto',
          maxWidth: 800,
        }}
      />
    </div>
  );

SearchMovie.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChangeText: PropTypes.func,
};

SearchMovie.defaultProps = {
  value: '',
  onSubmit: /* istanbul ignore next */ () => {},
  onChangeText: /* istanbul ignore next */ () => {},
};

export default SearchMovie;
