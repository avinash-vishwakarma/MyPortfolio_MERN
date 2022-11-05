import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import LoginPage from "./pages/auth/LoginPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/admin-login" element={<LoginPage />} />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
