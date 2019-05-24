import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import logos from "./SiteLOGO.svg";
import Boxes from "./components/Boxes.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Boxes />
      <header className="App-header">
        <img src={logos} className="App-logo" alt="logo" />
        <p>Find out which MV is the most viewed of EXO or TWICE</p>
      </header>
    </div>
  );
}

export default App;
