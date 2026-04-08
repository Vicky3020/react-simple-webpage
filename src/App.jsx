import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  // React Building block    // return ku mela type panrathu ella js. inga matu tha js type pananu
  // 1. Components
  // 2. props
  // 3. state

  let name = " Tailwind CSS";

    //  Hook -> usestate
  const [calculate, setCalulate] =useState;

  function increment() {
    if(calculate<50){
      setCalulate(calculate+1);
    }
    else{
      setCalulate(calculate-50);
    }

  }

  return (
    // return kulla html tag matu tha kudukanum.
    <>
      <button onClick={increment}>  Like {setCalulate} </button>

      <Contact />
      <Card name="Kalai" />
      <h1> welcome to {name} </h1>
      <Card name="Surya" />
      <Home />
      <input type="text" /><br /> <br />
      <input type="text" />
      <hr />
      <Card name="Vicky" />
    </>
  );
}

export default App;
