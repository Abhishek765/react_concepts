import React, {useState} from "react";
import Tweet from "./Tweet";
import "./App.css"
function App() {

  // state example
    const [count, setCount] = useState(0);
    const [isRed, setRed] = useState(false);

    // API CALL Example
    const [users, setUser] = useState([
      {name: "Abhishek" , message: "This is cool react"},
      {name: "Jhon" , message: "Winter is coming"},
      {name: "Traversia Media" , message: "This is Cool Media"},
      {name: "CWH" , message: "Best developer of India"}
    ]);
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }
  return (
    <div className="app">
      {/* State example */}
      {/* <h1 className = {isRed ? 'red': ""} >Change my color</h1>
      <button onClick={increment} > Hit me to Increment the counter</button>
      <h1>{count}</h1> */}

      {/* Api call example */}
      {users.map( user => (
        <Tweet name = {user.name} message = {user.message}/>
      ))}
      
    </div>
  );
}

export default App;
