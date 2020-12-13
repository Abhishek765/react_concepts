import React, { useState, useContext } from "react";
import { MoviesContext } from "./MoviesContext";
// To add new Movies
const AddMovies = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [movies, setMovies] = useContext(MoviesContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
      setPrice(e.target.value);
    };
    const addMovie = (e) => {
    e.preventDefault();
    console.log("Movie Added");
    // re-render(copy) again movies with additional movie
    setMovies((previousMovie) => [
      ...previousMovie,
      { name: name, price: price },
    ]);
    // setMovies(previousMovie => movies.add
  };
  

  return (
    <div>
      <form onSubmit={addMovie}>
        <input type="text" value={name} onChange={updateName} />
        <input type="number" value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovies;
