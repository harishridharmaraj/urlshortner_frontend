import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const linkstyle = {
  textDecoration: "none",
  cursor: "pointer",
  color: "white",
};
const DashboardNav = () => {
  return (
    <>
      <div className="dashnav">
        <div className="dashcont">
          <h2>
            <Link to="/dashboard" style={linkstyle}>
              UrlShortner
            </Link>
          </h2>
          <h4>
            <FaUserAlt
              style={{ color: "#fff", marginRight: "10px", fontSize: "large" }}
            />
            Admin
          </h4>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
