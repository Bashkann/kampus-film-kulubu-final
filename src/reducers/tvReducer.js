export const initialState = {
  shows: [],
  loading: false,
  error: null,
  query: "star",
  filters: { genre: "all", language: "all", rating: 0 },
  watchlist: [],
  page: 1,
  pageSize: 6,
};

export function tvReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, shows: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: "Veri alınamadı." };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_FILTERS":
      return { ...state, filters: action.payload };
    case "ADD_WATCHLIST":
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case "REMOVE_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_WATCHLIST":
      return { ...state, watchlist: [] };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
