import React from "react";

function Food({ fav }) {
  console.log(fav);
  return (
    <h1>I like {fav}</h1>
  );
}

function App() {
  return (
    <div className="App">
    <h1>Hello~</h1>
    <Food fav="potato"/>
    <Food fav="totamo"/>
    <Food fav="doughnut"/>
    </div>
  );
}

export default App;
