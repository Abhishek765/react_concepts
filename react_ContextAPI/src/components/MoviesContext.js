import React, { useState, createContext } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "20",
      id: 2341,
    },
    {
      name: "Inception",
      price: "10",
      id: 2352,
    },
    {
      name: "Interstellar",
      price: "25",
      id: 2356,
    },
  ],[]);
  return (
    <div>
      <MoviesContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MoviesContext.Provider>
    </div>
  );
};
