const initialState = {
  items: [],
  isLoading: false,
  error: null,
  page: 0,
  filters: [],
  searchText: '',
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        items: [...state.items, ...action.movies],
        page: state.page + 1,
      };
    case 'FETCH_MOVIES_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    case 'RESET_PAGING':
      return { ...state, page: 0, items: [] };
    case 'RESET_FILTERS':
      return { ...state, filters: [] };
    case 'ADD_FILTER':
      return { ...state, filters: [...state.filters, action.filter] };
    case 'REMOVE_FILTER': {
      const filtersBeforeRemove = [...state.filters];
      filtersBeforeRemove.splice(filtersBeforeRemove.indexOf(action.filter), 1);
      return { ...state, filters: [...filtersBeforeRemove] };
    }
    case 'CHANGE_SEARCH_TEXT':
      return { ...state, searchText: action.text };
    default:
      return state;
  }
};

export default movies;
