import './Style.css'
import React, { useEffect, useState } from "react";
import { ResultCard  } from './ResultCard';

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&language=ru&page=1";

export const Trend = () => {
    const [movies, SetMovies] = useState([]);

    useEffect(() =>{
      fetch(APIURL)
        .then((res) => res.json())
          .then((data) => {
            SetMovies(data.results)
        })
    }, [])  
  

    return (
            <div className="Movies">
                {movies.length > 0 && movies.map((movie) => 
                <ResultCard  key={movie.id} movie={movie} type="watchlist"/>)}
            </div>
    )
}