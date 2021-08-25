import React,{useState, useEffect} from 'react';

import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=52bdaebc337db13698b78f5cff54101b&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=52bdaebc337db13698b78f5cff54101b&query="




function App() {
  const [movies, setMovies ] = useState([]);

  useEffect(async () => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [])

  return (
    <div>
      {movies.length > 0 && movies.map((movie) => 
      <Movie key={movie.id} {...movie}/>)}
    </div>
  );
}

export default App;
