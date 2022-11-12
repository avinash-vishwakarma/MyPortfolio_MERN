import React from "react";
import { Link } from "react-router-dom";
import classes from "./DashboardLinks.module.css";
import { AuthContext } from "../../../contexts/authContexts";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const DashboardLinks = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    authContext.logout();
    navigate("/", { replace: true });
  };

  return (
    <ul className={`${classes.Dashboard__linkContainer} bg-extra-dark`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/admin/dashboard">Contact Messages</Link>
      </li>
      <li>
        <Link to="/admin/projects">Projects</Link>
      </li>
      <li>
        <Link to="/admin/add-project">add Projects</Link>
      </li>
      <li>
        <button onClick={LogoutHandler}>logout</button>
      </li>
    </ul>
  );
};

export default DashboardLinks;
