import React, { useEffect, useState, useRef } from 'react';
import "../style/popular.css"

const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGYyYTI0NmY1ODZiMmFkZjFlZDc5NjU1YWQ5MmYxNyIsIm5iZiI6MTczNDAyNzUzNi44NzUsInN1YiI6IjY3NWIyOTEwNWM0MmE4YzZlZDhkMTQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VxvPzRdVyW5nNbejW6iDdZkrFk2phwe-YWxOSnAzBZc';
const BASE_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export default function Popular() {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${KEY}`
    }
  };

  useEffect(() => {
    fetch(BASE_URL, options)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  const gridRef = useRef(null); 
  useEffect(() => {
    const gridElement = gridRef.current;

    const scrollGrid = () => {
        if (gridElement) {
          gridElement.scrollLeft += 1; 
          if (gridElement.scrollLeft >= gridElement.scrollWidth - gridElement.clientWidth) {
            
            gridElement.scrollLeft = 0;
          }
        }
      };
  
      
      const interval = setInterval(scrollGrid, 10); 
  
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div >
      <h1>Popular Movies</h1>
      <div className='popular_movies_grid'  ref={gridRef}>
        {movies.map(movie => (
          <div key={movie.id} className='movie_card'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='popular_img'
            />
            <h2 className='popular_movie_title'>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
