import "../style/input.css"
import "../style/movie_grid.css"
import "../style/app.css"
import { useState, useEffect } from "react";
import MovieGrid from "./MovieGrid";


const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGYyYTI0NmY1ODZiMmFkZjFlZDc5NjU1YWQ5MmYxNyIsIm5iZiI6MTczNDAyNzUzNi44NzUsInN1YiI6IjY3NWIyOTEwNWM0MmE4YzZlZDhkMTQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VxvPzRdVyW5nNbejW6iDdZkrFk2phwe-YWxOSnAzBZc';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const BASE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';



export default function Input() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${KEY}`
        }
    };

    const getPopular = () => {
        setIsLoading(true);
        setMovies([]);
        fetch(BASE_URL + '/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                setMovies(res.results);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const findMovie = () => {
        if (!searchQuery) return;

        setIsLoading(true);
        setMovies([]);
        fetch(BASE_SEARCH_URL + '?query=' + searchQuery, options)
            .then(res => res.json())
            .then(res => {
                setMovies(res.results);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getPopular();
    }, []);

   

    return (
        <div className="input_back_color">
            <div className="input_section">
                <div className="input_div">
                    <input 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                        type="text" 
                        placeholder="Put movie name" 
                        className="input"
                    />
                    <button onClick={findMovie} className="input_button">Submit</button>
                </div>
            </div>

            {isLoading && <p>Loading...</p>}
            <MovieGrid movies={movies} />
        </div>
    );

}