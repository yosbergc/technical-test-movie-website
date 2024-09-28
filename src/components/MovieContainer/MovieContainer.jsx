function MovieContainer({ movies, error }) {
    return (
        <section>
            {error !== false && <p>{error}</p>}
            {movies && movies.map(movie => {
                console.log(movie)
            })}
        </section>
    )
}
export { MovieContainer }