import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import SingleWidget from "./Pages/singleWidget";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/widgetName/:widget" element={<SingleWidget />} />
      </Routes>
    </>
  );
}

export default App;
