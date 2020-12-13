import React, { useContext, useEffect, useState } from "react";
import { BeerCraftContext } from "./BeerCraftContext";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const Beers = (props) => {
  // Fetching the context
  const [BeersDetails, setBeersDetails] = useContext(BeerCraftContext);
  const [BeerImage, setBeersImage] = useState([]);
  // Styling the card
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    getBeerImages();
  }, []);

  const getBeerImages = async () => {
    // Do the axios api call
    const url =
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json";
    const response = await axios.get(url);
    setBeersImage(response.data);
  };
  let counter = 0;
  let i = 0;
  return (
    <div className="beers">
      <div className="container py-4">
        <div className="row">
          {BeersDetails.slice(0, 20).map((Beers) => {
            i++;
            return (
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {Beers.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {Beers.style}
                    </Typography>
                  </CardContent>
                  {/* <div className={classes.controls}>
       
         
        </div> */}
                </div>

                {BeerImage.slice(i % 5, (i + 1) % 5).map((Image) => {
                  // counter = 0;
                  // i=i+1;
                  // if(i==6){
                  //   i=0;
                  // }
                  // {
                  //   counter = counter + 1;
                  // }

                  // if (counter === 1) {
                  //   return;
                  // }
                  return (
                    <CardMedia
                      className={classes.cover}
                      image={Image.image}
                      title="Live from space album cover"
                    />
                  );
                })}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Beers;
