import React from "react";

import "./style.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Canvas3d from "./components/Canvas3d";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Canvas3d />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
