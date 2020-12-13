import React from "react";

function Hello() {
 
    const sayhello = () => {
    console.log("HELLO");
  };

  return (
    <div>
      <button onClick={sayhello()}>Say Hello</button>
    </div>
  );
}

export default Hello;
