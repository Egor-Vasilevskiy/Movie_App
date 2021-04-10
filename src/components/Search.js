import './Style.css'
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase } from '@material-ui/core';
import { ResultCard  } from './ResultCard';


const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=8ae9673b0952deb4fb5523ce7534dbf8&language=ru&query=";

const useStyles = makeStyles({
    root: {
        background: '#303539',
        margin: '50px',
        textAlign:'center',
        width:'500px',
        borderRadius:'20px',
    },

    input: {
        color:'#fff',
        paddingLeft: '15px',
        textAlign:'center',
    },

    iconButton: {
        color: '#fff'
    }
})

export const Search = () => {
    const classes = useStyles();

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
  
    const onChange = (e) => {
      e.preventDefault();
  
      setQuery(e.target.value);
  
      fetch(SEARCHAPI + query)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        });
    };
  
    return (
        <div className='Search'>
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Что будем искать?"
                value={query}
                onChange={onChange}
            />
        </Paper>

        <div className="Movies">
            {results.length > 0 && results.map((movie) => 
            <ResultCard  key={movie.id} movie={movie} />)}
        </div>
    </div>
)}
