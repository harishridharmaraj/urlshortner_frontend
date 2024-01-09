import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    setErr("");
  }, [email, pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/login", {
        pass,
        email,
      });

      if (res.status === 200) {
        console.log("Successfully logged in");
        localStorage.setItem("token", res.data);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response data:", error.response.data.error);
        console.log("Error response status:", error.response.status);
        setErr(error.response.data.error);

        if (error.response.status === 404) {
          setErr("Invalid Credentials");
        } else {
          setErr("Invalid Credentials");
        }
      } else if (error.request) {
        console.log("No response received:", error.request);
        setErr("Invalid Credentials");
      } else {
        console.error("Error setting up the request:", error.message);
        setErr("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="logincontainer">
      <div className="loginpage">
        <h2 style={{ textAlign: "center", marginBottom: "5px" }}>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {err && <div style={{ color: "red" }}>{err}</div>}
          <div className="loginholder">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/reset">Forgot Password</Link>
              <Link to="/register">Create Account</Link>
            </div>
            <div>
              <button type="submit" className="logbtn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
