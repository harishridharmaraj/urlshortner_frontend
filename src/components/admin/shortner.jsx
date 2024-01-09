import React, { useState, useEffect } from "react";
import DashLayout from "./dashlayout";
import Randomstring from "randomstring";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Shortner = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [email, setEmail] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [err, setErr] = useState("");

  const handleData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const res = await axios.get("http://localhost:4000/shortner", {
        headers: {
          "x-auth-token": token,
        },
      });
      if (res) {
        setData(res.data[0]);
        setEmail(res.data[0].email);
        setShorturl(Randomstring.generate(6));
      }
    }
  };
  useEffect(() => {
    handleData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.urls && data.urls.some((url) => url.originalurl === originalUrl)) {
      setErr("Domain already exist");
      setOriginalUrl("");
    } else {
      await axios.post("http://localhost:4000/urls", {
        originalUrl,
        shorturl,
        email,
      });
      setOriginalUrl("");
      navigate("/shortner");
      setShorturl(Randomstring.generate(6));
    }
  };

  return (
    <DashLayout>
      <div className="shortner">
        <h2>Shorten your Url</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="URL-https://google.com"
            value={originalUrl}
            onChange={(e) => {
              setOriginalUrl(e.target.value);
              setErr("");
            }}
          />
          {err && <div style={{ color: "red" }}>{err}</div>}
          <button type="submit">Convert</button>
          {shorturl && (
            <a href={originalUrl}>http://localhost:4000/a/{shorturl}</a>
          )}
        </form>
      </div>
    </DashLayout>
  );
};

export default Shortner;
