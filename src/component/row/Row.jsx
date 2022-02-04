import React, { useEffect, useState } from "react";
import instance from "../../config/axios";
import "./row.css";

export default function Row({ title, fetchUrl, isLarge = false }) {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await instance.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie.map(
          (mov, i) =>
  ((isLarge && mov.poster_path) ||(!isLarge &&
  mov.backdrop_path) ) &&(   <img
      key={i}
      className={`row__poster ${isLarge && "row__posterLarge"}`}
      src={`${base_url}${
        isLarge ? mov?.poster_path : mov?.backdrop_path 
      }`}
      alt={mov.name}
    />)
        )}
      </div>
    </div>
  );
}
