import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Item from "./Components/Item/Item"
import Popular from "./Components/Popular/Popular"
import Toprated from "./Components/Toprated/Toprated"
import Upcoming from "./Components/Upcoming/Upcoming"
import Header from './Components/Header/Header'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <Popular />,
      loader: Popular,
    },
    {
      path: "/movies",
      element: <Toprated />,
      loader: Toprated,
    },
    {
      path: "/movies/upcoming",
      element: <Upcoming />,
      loader: Upcoming,
    },
    {
      path: "/movies/:id",
      element: <Item />,
    },

    
    
    
  ]);
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  )
export default App
