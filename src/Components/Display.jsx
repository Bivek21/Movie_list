import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const Display = ({ MovieList, handleOnDeleteMovie }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(MovieList);
  }, [MovieList]);
  const handleOnFilter = (mood) => {
    if (mood === "all") {
      return setDisplayList(MovieList);
    }
    setDisplayList(MovieList.filter((mv) => mv.mood === mood));
  };
  return (
    <div className="container mt-5 rounded">
      <div className="bg-dark p-3">
        <div className="row">
          <div className="col">
            <button
              onClick={() => handleOnFilter("all")}
              type="button"
              className="btn btn-primary"
            >
              All
            </button>
            <button
              onClick={() => handleOnFilter("drama")}
              type="button"
              className="btn btn-warning"
            >
              Drama
            </button>
            <button
              onClick={() => handleOnFilter("action")}
              type="button"
              className="btn btn-info"
            >
              Action
            </button>
          </div>
          <div className="mt-3 text-light">{displayList.length}</div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-around gap-2 flex-wrap">
            {displayList.map((item, i) => (
              <div className="" key={i}>
                <MovieCard
                  searchedMovie={item}
                  deleteFunc={handleOnDeleteMovie}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
