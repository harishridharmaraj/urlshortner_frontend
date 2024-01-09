import React, { useState, useEffect } from "react";
import DashLayout from "./dashlayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Analytics = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const handleData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const res = await axios.get("http://localhost:4000/analytics", {
        headers: {
          "x-auth-token": token,
        },
      });

      setData(res.data[0].urls);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <DashLayout>
      <div className="analytics">
        <table>
          <tr>
            <th>S.No</th>
            <th>Url</th>
            <th>Short Url</th>
            <th>Clicks</th>
          </tr>
          {data &&
            data.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{item.originalurl}</td>
                <td>
                  <a href={item.originalurl}>
                    http://localhost:4000/a/{item.shorturl}
                  </a>
                </td>
                <td>{item.clickCount || 0}</td>
              </tr>
            ))}
        </table>
      </div>
    </DashLayout>
  );
};

export default Analytics;
