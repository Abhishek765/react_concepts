import React from "react";
import "./Tweet.css";

function Tweet({name, message}) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
     <p>{message}</p>
    
    </div>
  );
}

export default Tweet;
