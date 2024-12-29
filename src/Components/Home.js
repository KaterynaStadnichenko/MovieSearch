import { useEffect, useState } from 'react';
import Input from './Input';

const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGYyYTI0NmY1ODZiMmFkZjFlZDc5NjU1YWQ5MmYxNyIsIm5iZiI6MTczNDAyNzUzNi44NzUsInN1YiI6IjY3NWIyOTEwNWM0MmE4YzZlZDhkMTQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VxvPzRdVyW5nNbejW6iDdZkrFk2phwe-YWxOSnAzBZc';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const BASE_SEARCH_URL = 'https://api.themoviedb.org/3/keyword/{keyword_id}/movies';

export default function Home() {

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
            <div>
                <Input 
                // getPopular={getPopular}
                findMovie={findMovie}
                setSearchQuery={setSearchQuery}
                />
                {/* {isLoading ? <h2>Loading...</h2> : <MovieGrid movies={movies} />} */}
            </div>
           )
        
}