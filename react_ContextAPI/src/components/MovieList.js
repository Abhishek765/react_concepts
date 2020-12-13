import React, { useContext, useState } from "react";
import Movie from "./Movie";
import { MoviesContext } from "./MoviesContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
