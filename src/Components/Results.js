const IMG_BASE = 'https://image.tmdb.org/t/p/w500/';


export default function Results() {
    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
            {
                props.movies.map(movie => {
                    return (
                        <div className='col' key={movie.original_title}>
                            <div className='card shadow-sm'>
                                <img src={IMG_BASE + movie.poster_path} />
                                <div className="card-body">
                                    <p className="card-text">{movie.original_title}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-body-secondary">Popularity: {movie.popularity}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}