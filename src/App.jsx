import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Portfolio from "./components/portfolio";

import { threeJsLogic } from "./lib/three";

function App() {
  useEffect(() => {
    threeJsLogic();
  }, []);
  return (
    <>
      <canvas id="myThreeJsCanvas" />
      <main>
        <Header />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
