import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import LoginPage from "./pages/auth/LoginPage";
import Dashboard from "./pages/Admin/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./components/Route/ProtectedRoutes";
import AdminPanel from "./pages/Admin/AdminPanel";
import Projects from "./pages/Admin/Projects";
import AddProject from "./pages/Admin/Projects/AddProject";
import MyProject from "./pages/myProjects";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/my-porjects" element={<MyProject />} />
        <Route path="/about-me" element={<AboutMe />} />

        <Route element={<ProtectedRoutes isLogin={false} />}>
          <Route path="/admin-login" element={<LoginPage />} />
        </Route>

        <Route path="/admin/" element={<ProtectedRoutes />}>
          <Route element={<AdminPanel />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="add-project" element={<AddProject />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
