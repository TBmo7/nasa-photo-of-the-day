import React, {useState, useEffect } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";



function App() {


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <ImageGrid />
      
    </div>
  );
}

export default App;
