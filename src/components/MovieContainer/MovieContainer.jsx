import { Movie } from "../Movie/Movie"
import './moviecontainer.css'
function MovieContainer({ movies, error, loading }) {
    return (
        <section className="movie-container">
            {error !== false && <p>{error}</p>}
            {movies?.length > 1 && movies.map(movie => {
                return <Movie
                movieName={movie.Title}
                movieSrc={movie.Poster}
                year={movie.Year}
                type={movie.Type}
                key={movie.imdbID}
                />
            })}
            {loading && <p>Cargando</p>}
        </section>
    )
}
export { MovieContainer }