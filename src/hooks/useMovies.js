import { useCallback, useEffect, useRef, useState } from 'react'

import { getMovies } from '../services/movies.js'
import { debounce } from '../consts/debounce.js'

function useMovies({ query }) {
    const [movies, setMovies] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const queryRef = useRef(query)
    useEffect(() => {
        if (query === '') return
        if (queryRef.current === query) return
        getQueryMovies(query)
    }, [query])

    const getQueryMovies = useCallback(debounce((query) => {
        setLoading(true)
        setError(false)
        queryRef.current = query;
        getMovies(query)
            .then(data => setMovies(data))
            .catch(error => setError(error))
            .finally(setLoading(false))
    }, 400), [])

    return {movies, error, loading}
}

export { useMovies }