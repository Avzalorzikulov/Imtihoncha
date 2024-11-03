/* eslint-disable no-unused-vars */
import React from "react";
import "./Item.css";
import { useLoaderData } from "react-router-dom";
function Item() {
  const data = useLoaderData();
  return (
    <div>
      <ul className="item__list">
        {data.results.map((film) => (
          <li className="item__item" key={film.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
            />
            <div>
              <h3
                className="item__title"
                style={{ fontWeight: "bold", fontSize: 20 }}
              >
                {film.title}
              </h3>
              <br />
              <p className="item__id">Id: {film.id}</p>
              <br />
              <p className="item__overview">Overview: {film.overview}</p>
              <br />
              <p className="item__date">Date: {film.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Item;
