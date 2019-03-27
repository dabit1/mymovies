const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const genres = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GENRES_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_GENRES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        items: [...action.genres],
      };
    case 'FETCH_GENRES_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default genres;
