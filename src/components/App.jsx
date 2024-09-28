import './app.css'
import { useEffect, useState } from 'react'
import { MovieContainer } from './MovieContainer/MovieContainer'
function App() {
    const [movies, setMovies] = useState(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        setError(false)
        fetch('https://www.omdbapi.com/?apikey=b9baac6e&s=Avengers')
          .then(response => {
            if (!response.ok) {
                return setError('Hubo un error en la solicitud')
            }
            return response.json()
          })
          .then(data => {
            if (data?.Search) {
                setMovies(data.Search)
            } else {
                return setError('No se encontró lo que buscabas.')
            }
          })
          .catch(error => setError(error))
    }, [])
    return (
        <>
            <header>
                <h1>Movie Search</h1>
                <section className='input-container'>
                    <input type="text" placeholder="Matrix, Terrifier"/>
                    <button>Buscar</button>
                </section>
            </header>
            <MovieContainer movies={movies} error={error}/>
        </>
    )
}
export { App }