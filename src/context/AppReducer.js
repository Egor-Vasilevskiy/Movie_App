export const AppReducer = (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE_TO_SAVELIST":
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };
      case "REMOVE_WATCHED_FILM":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload
          ),
        };
        default:
      return state;
  }
};