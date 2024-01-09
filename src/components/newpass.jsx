import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const NewPass = () => {
  const { token } = useParams();
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const getusers = await axios.get("http://localhost:4000/users");
      const userdata = getusers.data;
      const finduser = userdata.some((id) => id.passwordtoken === token);

      if (!finduser) {
        setSuccess("Token Expired, Please try again!");
      }
    };

    checkToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getusers = await axios.get("http://localhost:4000/users");
      const userdata = getusers.data;
      const finduser = userdata.some((id) => id.passwordtoken === token);

      if (finduser) {
        await axios.put(`http://localhost:4000/createpass/${token}`, { pass });
        setSuccess("Password Reset Successfull");
        const delayRedirect = setTimeout(() => {
          navigate("/login");
        }, 5000);
        delayRedirect();
      } else {
        setSuccess("Token Expired, Please try again!");
      }
    } catch (error) {
      console.log("Password reset Error", error);
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
                type="password"
                placeholder="New Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
              />
              {pass !== confirmPass && (
                <div style={{ color: "red" }}>Password does not Match</div>
              )}
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

export default NewPass;
