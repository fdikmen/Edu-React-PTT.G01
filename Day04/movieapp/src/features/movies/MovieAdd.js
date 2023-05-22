import React, { useEffect } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie,updateMovie } from './moviesSlice'
import { useParams } from 'react-router-dom'
import { fetchMovieById } from './moviesSlice'

function MovieAdd() {

  /*const params = useParams()
  params.movieId*/

  const { movieId } = useParams()
  const editMovie = useSelector(state => state.moviesReducer.movie)

  useEffect(() => {
    console.log("useEffect", movieId)
    if (movieId) {
      dispatch(fetchMovieById(movieId))
    }
  }, [movieId])

  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault() // prevent page refresh
    const formData = new FormData(e.target)
    const title = formData.get('title')
    const avatar = formData.get('avatar')
    const desc = formData.get('desc')
    console.log("onSubmit", title, avatar, desc)

    const newMovie = {
      title,
      avatar,
      desc
    }
    //dispatch({ type: "movies/addMovie", payload: newMovie })
    if(movieId){
      dispatch(updateMovie({newMovie}))
    }else{
      dispatch(addMovie(newMovie))
    }

  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <label>Title</label>
        <input placeholder='Title' name='title' defaultValue={editMovie && editMovie.title} />
      </Form.Field>
      <Form.Field>
        <label>Cover Image</label>
        <input placeholder='Cover Image' name='avatar' defaultValue={editMovie && editMovie.avatar} />
      </Form.Field>
      <Form.Field>
        <label>Desc</label>
        <input placeholder='Desc' name='desc' defaultValue={editMovie && editMovie.desc} />
      </Form.Field>
      <Button type='submit'>
        {movieId ? "Update" : "Save"}
      </Button>
    </Form>
  )
}

export default MovieAdd