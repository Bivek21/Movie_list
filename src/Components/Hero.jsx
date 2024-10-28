import React, { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { fetchFromAPI } from "../utils/axios";
import { randomChar } from "../utils/random";
import { useState } from "react";
import { useRef } from "react";

export const Hero = ({ addMovieToList }) => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [bgImg, setBgImg] = useState("");
  const shouldFetchRef = useRef(true);
  const searchRef = useRef("");
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);
  const fetchMovie = async (str) => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster);
    setSearching(false);
  };
  const handleOnMovieSearch = () => {
    const str = searchRef.current.value;
    fetchMovie(str);
    searchRef.current.value = "";
  };

  const handleOnDelete = () => {
    setSearchedMovie({});
    setSearching(true);
  };

  const handleOnAddToTheList = (mood) => {
    addMovieToList({ ...searchedMovie, mood });
    setSearchedMovie({});
    setSearching(true);
  };
  const movieStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  return (
    <div>
      <nav className=" py-3 text-danger fixed transparent-nav">
        <h2 className="container small-title">MovieWorld</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="input-group my-5">
            <input
              ref={searchRef}
              onFocus={() => setSearching(true)}
              type="text"
              className="form-control"
              placeholder="Search Movie By Name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              onClick={handleOnMovieSearch}
              className="btn btn-danger"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          {!searching && (
            <div className="movie-card-display showMovie">
              <MovieCard
                searchedMovie={searchedMovie}
                deleteFunc={handleOnDelete}
                handleOnAddToTheList={handleOnAddToTheList}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
