import { combineReducers } from 'redux';
import settings from './settings';
import movies from './movies';
import genres from './genres';

const rootReducer = combineReducers({
  settings,
  movies,
  genres,
});

export default rootReducer;
