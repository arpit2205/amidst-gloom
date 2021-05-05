import logo from "./logo.svg";
import "./App.scss";
import React, { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);
  return (
    <div className="container">
      <div className="panel one">
        <h1 style={{ color: "white" }}>HI</h1>
      </div>
      <div className="panel two">
        <h1 style={{ color: "white" }}>I AM</h1>
      </div>
      <div className="panel three">
        <h1 style={{ color: "white" }}>ARPIT</h1>
      </div>
    </div>
  );
}

export default App;
