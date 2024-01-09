import React from "react";
import "./App.css";
import Front from "./components/front";
import Login from "./components/login";
import Register from "./components/register";
import Forgetpass from "./components/forgetpass";
import Dashboard from "./components/admin/dashboard";
import { Routes, Route } from "react-router-dom";
import Shortner from "./components/admin/shortner";
import Analytics from "./components/admin/analytics";
import NewPass from "./components/newpass";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/login" element={<Login />} />
        <Route path="reset" element={<Forgetpass />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="shortner" element={<Shortner />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reset/:token" element={<NewPass />} />
      </Routes>
    </div>
  );
};

export default App;
