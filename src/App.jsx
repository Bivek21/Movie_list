import { useState } from "react";
import "./App.css";
import { Hero } from "./Components/Hero";
import { Display } from "./Components/Display";

function App() {
  const [MovieList, setMovieList] = useState([]);
  const addMovieToList = (movie) => {
    setMovieList((prevList) => [...prevList, movie]);
  };
  const handleOnDeleteMovie = (movieToDelete) => {
    setMovieList((prevList) =>
      prevList.filter((movie) => movie !== movieToDelete)
    );
    {
      const handleOnDeleteMovie = (ImdbId) => {
        confirm("are you sure you want to delete this");
        setMovieList(MovieList.filter((mv) => mv.ImdbId != ImdbId));
      };
    }
  };
  return (
    <div>
      <div className="wrapper">
        {/* hero section */}
        <Hero addMovieToList={addMovieToList} />

        {/* display section */}
        <Display MovieList={MovieList} deleteFunc={handleOnDeleteMovie} />
      </div>
    </div>
  );
}

export default App;
