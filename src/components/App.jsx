import './app.css'
import { useMovies } from '../hooks/useMovies'
import { MovieContainer } from './MovieContainer/MovieContainer'
import { useSearch } from '../hooks/useSearch'
function App() {
    const { search, setSearch } = useSearch()
    const { movies, error, loading } = useMovies({ query: search })
    function handleChange(event) {
        setSearch(event.target.value)
    }
    return (
        <>
            <header>
                <h1>Movie Search</h1>
                <section className='input-container'>
                    <input type="text" placeholder="Matrix, Terrifier" value={search} onChange={handleChange}/>
                </section>
            </header>
            <MovieContainer movies={movies} error={error} loading={loading} />
        </>
    )
}
export { App }