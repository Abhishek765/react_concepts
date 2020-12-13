import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Beers from "./Components/Beers";
import { BeerCraftProvider } from "./Components/BeerCraftContext";

function App() {
  const [search, setSearch] = useState("");
  // const [recipes,setRecipes] = 
// For searching the recipe
  const SearchBeer = (e) =>{
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <BeerCraftProvider>
        <Header search={search}  SearchBeer = {SearchBeer} />
        <Beers searchName={search}/>
      </BeerCraftProvider>
    </div>
  );
}

export default App;
