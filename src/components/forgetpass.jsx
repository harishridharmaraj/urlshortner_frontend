import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
const Forgetpass = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getusers = await axios.get("http://localhost:4000/users");
      const userdata = getusers.data;
      const finduser = userdata.some((id) => id.email === email);
      if (finduser) {
        axios.put("http://localhost:4000/forgetpass", { email });

        setSuccess("Reset Link has been sent to your Email");
      } else {
        setErr("Email Id does not exist");
      }
    } catch (error) {
      setErr("Please Try Again", error);
    }
  };
  return (
    <div className="resetcontainer">
      {success ? (
        success
      ) : (
        <div className="resetcontent">
          <h2 style={{ marginBottom: "10px" }}>Password Reset</h2>
          <div className="resetform">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {err && <div style={{ color: "red" }}>{err}</div>}
              <button type="submit" className="regbtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forgetpass;
