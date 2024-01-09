import React from "react";
import "./styles.css";
import Navbar from "./navbar";
import illustration from "../assets/images/main.svg";

const Front = () => {
  return (
    <div className="frontcontainer">
      <Navbar />
      <div className="main">
        <div>
          <img src={illustration} alt="" />
        </div>
        <div className="maincontent">
          <h1>Shorten your URL</h1>
          <p>and get analyzed.</p>
        </div>
      </div>
    </div>
  );
};

export default Front;
