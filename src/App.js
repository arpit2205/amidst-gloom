import logo from "./logo.svg";
import "./App.scss";
import React, { useEffect } from "react";
import sun from "./sun.svg";

import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

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

    gsap.to(".sun", 1, {
      scale: 200,
      scrollTrigger: {
        trigger: ".two",
        toggleActions: "restart none reverse none",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="container">
      <div className="panel one">
        <img className="sun" src={sun} />
        <h1 className="title">
          Hey <br />
          <span className="underline"> there.</span>
        </h1>
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
