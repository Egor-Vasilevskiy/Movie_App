import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// initial state
const initialState = {
  watchlist:  localStorage.getItem("watchlist")
  ? JSON.parse(localStorage.getItem("watchlist"))
  : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const addMovieToSaveList = movie => {
    dispatch({ type: "ADD_MOVIE_TO_SAVELIST", payload: movie });
  };

  const removeWatchedFilm = id => {
    dispatch({ type: "REMOVE_WATCHED_FILM", payload: id });
  };
  
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToSaveList,
        removeWatchedFilm,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};