import React from "react";
import Register from "./Pages/Register";
import "./style.scss";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
