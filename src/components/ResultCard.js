import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../context/GlobalState'
import './Style.css'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 20,
    background:'#1b1e21',
    textAlign:'center',
  },

  title: {
    color:'#ffffff'
  },

  button: {
    display:'flex',
    justifyContent:'center',
  },

  titleOverview: {
    fontSize:'40px',
  },
});


export const ResultCard = ({ movie }) => {
  const classes = useStyles();

  const { addMovieToSaveList, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
  <Card className={classes.root}>
    <CardActionArea className="CardActionArea">
      <CardMedia 
        component="img"
        alt={movie.title}
        height="400"
        image={IMGPATH + movie.poster_path}
        title={movie.title}
      />
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2" >
        {movie.title}
        </Typography>
        <Typography className='overview'>
          <Typography className={classes.titleOverview}>Overview:</Typography>
          {movie.overview}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.button}>
      <Button onClick={() => addMovieToSaveList(movie)} disabled={watchlistDisabled} size="small" color="primary">
        Сохранить
      </Button>
    </CardActions>
  </Card>
)}