import React, { useContext } from "react";
import { BeerCraftContext } from "./BeerCraftContext";

const Header = ({ search, SearchBeer }) => {

  const [BeersDetails, setBeersDetails] = useContext(BeerCraftContext);
  let newRecipes;
  const updateRecipe = (Brand) => {
    if (Brand !== null) {
      console.log("SearchName", Brand);

    //   var setValue = recipes;
    //   newRecipes = setValue.filter((el) => {
    //     return el.val !== "One";
    //   });
    }

    console.log("recipes: ", newRecipes);
  };

  const updateSearch = (e) => {
    e.preventDefault();
    console.log("Searchingy...");
    console.log("Search Name: " + search);
    // const [recipes, setRecipes] = useContext(RecipeContext);
    updateRecipe(search);
  };

  return (
    <div className="jumbotron">
      <h1 className="display-2">
        <span className="material-icons brand-icon">restaurant</span>Top Brands Beers
      </h1>
      <form onSubmit={updateSearch}>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search The Brand..."
            value={search}
            onChange={SearchBeer}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" type="submit">
              Search Brand
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
