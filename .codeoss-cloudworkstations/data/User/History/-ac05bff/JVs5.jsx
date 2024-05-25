import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css'
import welcome from './components/welcome'
import addMovie from './components/addMovie'
import moviesList from "./pages/moviesList"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<welcome username="Anxo" />} />
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>
    </>
  )
}

export default App