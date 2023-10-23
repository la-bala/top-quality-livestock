import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage"
import LoginPage from "./components/LoginPage"
import UploadPage from "./components/UploadPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/upload" element={<UploadPage/>} />
    </Routes>
  );
}

export default App;
