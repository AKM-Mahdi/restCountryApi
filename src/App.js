import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Countries from "./components/Countrires/Countries";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;
