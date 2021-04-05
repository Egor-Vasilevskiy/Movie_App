import React, { useContext } from "react";
import { MovieCard  } from './MovieCard';
import { GlobalContext } from '../context/GlobalState'

export const Save = ({movie}) => {

    const {watchlist} = useContext(GlobalContext)

    return (
            <div className="Movies">
                { watchlist.map((movie) => 
                <MovieCard  movie={movie} />)}
            </div>
    )
}