import React from "react";
import "../style/movie_grid.css"
import "../style/app.css"
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieGrid({ movies }) {
    return (
        <div className="movie_list_wrapper">
            <div className=" movies_list comtainer">
                {movies.map(movie => (
                    <div key={movie.id} className="movie_item">
                        <img 
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                            alt={movie.title} 
                            className="movie_image"
                        />
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
