import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./pages";

// GitHub Pages works better with HashRouter because it uses the # in the URL to handle routing on the client side

function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       </Routes>
       </Router>
    </div>
  );
}

export default App;
