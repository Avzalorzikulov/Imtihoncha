/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";
import Header from "../Header/Header";
function Popular() {
  const data = useLoaderData();
  console.log(data.results);
  return (
    <div>
      <Header />
      <h1>Popular Movies</h1>
      <ul className="list" >
        {data.results.map((movie) => (
          <Item  key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
export default Popular;
