import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const linkstyle = {
  textDecoration: "none",
  cursor: "pointer",
  color: "white",
  fontWeight: "Bold",
  fontSize: "20px",
};

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div>
          <Link to="/" style={linkstyle}>
            UrlShortner
          </Link>
        </div>
        <div className="navleft">
          <Link to="login" style={linkstyle}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
