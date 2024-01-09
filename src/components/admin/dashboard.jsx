import React, { useEffect, useState } from "react";
import "../styles.css";
import DashLayout from "./dashlayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    const res = await axios.get("http://localhost:4000/dashboard", {
      headers: {
        "x-auth-token": token,
      },
    });

    setData(res.data);
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <DashLayout>
      <div className="charts">
        <div>
          <h4>Total URL's</h4>
          {data && data.urls ? data.urls.length : 0}
        </div>
        <div>
          <h4>Total Clicks</h4>
          {data && data.totalClicks ? data.totalClicks : 0}
        </div>
        <div>
          <h4>URL's Converted Today</h4>
          {data && data.convertedToday ? data.convertedToday : 0}
        </div>
        <div>
          <h4>URL's Converted / Month</h4>
          {data && data.convertedThisMonth ? data.convertedThisMonth : 0}
        </div>
      </div>
    </DashLayout>
  );
};

export default Dashboard;
