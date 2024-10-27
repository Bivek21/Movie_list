import React, { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";

export const Hero = () => {
  useEffect(() => {
    fetchMovie(randomChar);
  }, []);
  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    console.log(movie);
  };

  const movieStyle = {
    backgroundImage: `url(https://www.omdbapi.com/src/poster.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className=" py-3 text-danger fixed">
        <h2 className="container">MovieWorld</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>Search Millions of Movies</h1>
              <p>Find about the movies more in details before watching them</p>
            </div>
          </div>
          <div className="input-group my-5">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Button
            </button>
          </div>

          <div className="movie-card-display">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};
