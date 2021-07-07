import React, {useState, useEffect } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import TopBar from "./components/TopBar"



function App() {


  return (
    
    <div className="App">

      <TopBar/>
      <ImageGrid />
      
    </div>
  );
}

export default App;
