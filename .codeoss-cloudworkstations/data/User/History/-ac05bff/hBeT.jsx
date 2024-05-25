import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css'
import welcome from './components/Welcome'
import addMovie from './components/MoviesAdd'
import MoviesList from "./pages/MoviesList"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome username="Oscar" />} />
        <Route path="/movies/list" element={<MoviesList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>
    </>
  )
}

export default App