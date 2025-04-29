import React from "react";
import "./App.css";
import Joke from "./components/JokeComponent";
import Quote from "./components/QuoteComponent";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1 className="Title">Form Time Ideas V2.0</h1>
      <div id="app-root-div">
        <Joke />
        <Joke />
      </div>
    </>
  );
}

export default App;
