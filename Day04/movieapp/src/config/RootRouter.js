import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Message } from 'semantic-ui-react'
import MovieAdd from '../features/movies/MovieAdd'
import MovieList from '../features/movies/MovieList'


export default function RootRouter() {
  return (
    <Routes>
    <Route path="/" element={<Message
      success
      header='Home Page'
      content='Welcome to Movie App!'
    />} />
    <Route path="/Add" element={<MovieAdd />} />
    <Route path="/List" element={<MovieList />} />
    <Route path="*" element={<Header as='h2'>404 Not Found</Header>} />
  </Routes>
  )
}
