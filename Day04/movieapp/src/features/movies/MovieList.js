import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from './moviesSlice'

function MovieList() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    const status = useSelector(state => state.status)
    const error = useSelector(state => state.error)

    useEffect(() => {
        // dispatch({type:"movies/fetchMovies"})
        dispatch(fetchMovies())
        console.log("Test", movies)
    }, [])

    return (
        <div>MovieList</div>
    )
}

export default MovieList