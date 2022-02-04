import React, { useEffect, useState } from "react";
import instance from "../../config/axios";
import request from "../../config/request";
import "./banner.css";
export default function Banner() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await instance.get(request.fetchForNetflixOriginals);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, m) {
    return string?.length > m ? string.substr(0, m - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.original_name ||movie?.name || movie?.title}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__disc">{truncate(`${movie?.overview}`, 150)}</h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
}

