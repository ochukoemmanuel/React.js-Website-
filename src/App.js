import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            elements={
              <div>
                <Navbar />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
