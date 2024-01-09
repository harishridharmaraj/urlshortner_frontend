import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const linkstyle = {
  textDecoration: "none",
  cursor: "pointer",
  color: "white",
};

const Dashsidebar = () => {
  const handleClick = () => {
    localStorage.clear();
  };
  return (
    <div className="dashside">
      <h4>
        <Link to="/dashboard" style={linkstyle}>
          Dashboard
        </Link>
      </h4>
      <h4>
        <Link to="/shortner" style={linkstyle}>
          Url Shortner
        </Link>
      </h4>
      <h4>
        <Link to="/analytics" style={linkstyle}>
          Analytics
        </Link>
      </h4>
      <h4>
        <Link to="/" style={linkstyle} onClick={handleClick}>
          Logout
        </Link>
      </h4>
    </div>
  );
};

export default Dashsidebar;
