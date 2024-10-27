import { useState } from "react";
import "./App.css";
import { Hero } from "./Components/Hero";
import { Display } from "./Components/Display";

function App() {
  return (
    <div>
      <div className="wrapper">
        {/* hero section */}
        <Hero />

        {/* display section */}
        <Display />
      </div>
    </div>
  );
}

export default App;
