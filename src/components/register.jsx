import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [success, setSuccess] = useState("");
  const [err, seterr] = useState("");
  const userentry = {
    fname: fname,
    lname: lname,
    email: email,
    password: pass,
    account: false,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getusers = await axios.get("http://localhost:4000/users");
      const userdata = getusers.data;
      const finduser = userdata.some((id) => id.email === email);
      if (!finduser) {
        try {
          await axios.post("http://localhost:4000/createusers", userentry);
          setFname("");
          setLname("");
          setEmail("");
          setPass("");
          setSuccess("Verification link has been sent to your Email Address");
        } catch (error) {
          console.log(error, "Cannot add New User");
          setSuccess("Please Try again");
        }
      } else {
        seterr("Email Already Exist");
      }
    } catch (error) {
      setSuccess("Please Try again");
    }
  };

  return (
    <div className="regcontainer">
      {success ? (
        success
      ) : (
        <div className="regcontent">
          <h2 style={{ marginBottom: "10px" }}>Register</h2>
          <div className="regform">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {err && <div style={{ color: "red" }}>{err}</div>}
              <input
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
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

export default Register;
