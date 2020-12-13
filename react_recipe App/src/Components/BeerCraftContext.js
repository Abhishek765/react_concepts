import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const BeerCraftContext = createContext();

export const BeerCraftProvider = (props) => {
  const [BeersDetails, setBeersDetails] = useState([]);

  useEffect(() => {
    getBeerCraft();
  }, []);

  const getBeerCraft = async () => {
    // Do the axios api call
    const url =
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json";
    const response = await axios.get(url);
    setBeersDetails( response.data);
  };

  
  return (
    <div>
      <BeerCraftContext.Provider value={[BeersDetails, setBeersDetails]}>
        {props.children}
      </BeerCraftContext.Provider>
    </div>
  );
};
