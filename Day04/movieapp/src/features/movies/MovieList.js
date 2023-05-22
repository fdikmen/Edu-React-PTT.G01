import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies,deleteMovie } from './moviesSlice'
import { Card, Icon } from 'semantic-ui-react'
import CardComp from '../../components/CardComp'


function MovieList() {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.moviesReducer.movies)
    const status = useSelector(state => state.moviesReducer.status)
    const error = useSelector(state => state.moviesReducer.error)

    useEffect(() => {
        // dispatch({type:"movies/fetchMovies"})
        dispatch(fetchMovies())
        console.log("Test", movies)
    }, [])

    const handleDelete = (id) => {
        console.log("handleDelete", id)
        // dispatch({type:"movies/deleteMovie", payload:id})
        dispatch(deleteMovie(id))
    }
    return (
        <div>MovieList
            {movies &&
              
            <Card.Group itemsPerRow={3}>
                {movies.map((movie,index) => 
                    <CardComp key={index} title={movie.title}
                    avatar={movie.avatar} 
                    desc={movie.desc} 
                    year={movie.year}
                    createdAt={movie.createdAt}
                    id={movie.id}
                    handleDelete={handleDelete}
                    />
                    )}
               
            </Card.Group>

}
        </div>
    )
}

export default MovieList