function Movie() {
    return (<article>
        <img src={movieSrc} alt={movieName} />
        <section className="upper">
            <h2>{movieName}</h2>
            <p>{type}</p>
        </section>
        <p>Year: {year}</p>
        <p>imdbID: {id}</p>
    </article>)
}

export { Movie }