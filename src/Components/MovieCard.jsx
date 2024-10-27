import React from "react";

export const MovieCard = ({}) => {
  const Poster = " https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container">
      <div className="row border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>Movie name</h3>
          <p>IMDB Rating 5.5</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};
