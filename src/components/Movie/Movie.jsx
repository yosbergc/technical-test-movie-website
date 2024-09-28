import './movie.css'
function Movie({ movieName, movieSrc, year, type }) {
    return (<article className='movie-single'>
        <img src={movieSrc} alt={movieName} />
        <section className="upper">
            <h2>{movieName}</h2>
            <p className='movie-type'>{type}</p>
        </section>
        <p>{year}</p>
    </article>)
}

export { Movie }