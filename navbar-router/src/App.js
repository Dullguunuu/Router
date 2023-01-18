import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )

}

export default App;