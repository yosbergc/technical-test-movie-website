import { Movie } from "../Movie/Movie"
import './moviecontainer.css'
function MovieContainer({ movies, error }) {
    return (
        <section className="movie-container">
            {error !== false && <p>{error}</p>}
            {movies && movies.map(movie => {
                return <Movie
                movieName={movie.Title}
                movieSrc={movie.Poster}
                year={movie.Year}
                id={movie.imdbID}
                type={movie.Type}
                key={movie.imdbID}
                />
            })}
        </section>
    )
}
export { MovieContainer }