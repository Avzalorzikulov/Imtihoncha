import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Popular from "./Components/Popular/Popular";
import TopRated from "./Components/Toprated/Toprated";
import UpComing from "./Components/Upcoming/Upcoming";
function App() {
  const popular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };
  const toprated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };
  const upcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/popular",
      element: <Popular />,
      loader: popular,
    },
    {
      path: "/toprated",
      element: <TopRated />,
      loader: toprated,
    },
    {
      path: "/upcoming",
      element: <UpComing />,
      loader: upcoming,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
