import React, { useState } from 'react';
import '../styles/index.css';

function Home() {
  const [selected, setSelected] = useState("green");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div id="trafficTop"></div>
      <div id="container">
        <div
          className={`light red ${selected === "red" ? "selected" : ""}`}
          onClick={() => setSelected("red")}
        ></div>
        <div
          className={`light yellow ${selected === "yellow" ? "selected" : ""}`}
          onClick={() => setSelected("yellow")}
        ></div>
        <div
          className={`light green ${selected === "green" ? "selected" : ""}`}
          onClick={() => setSelected("green")}
        ></div>
      </div>
    </div>
  );
}

export default Home;
