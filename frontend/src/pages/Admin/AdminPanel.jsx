import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../../components/ui/Container";
import Layout from "../../layouts";
import classes from "./AdminPanel.module.css";
import AdminPanelLinks from "./AdminPanelLinks";

const AdminPanel = () => {
  return (
    <Layout noFooter={true}>
      <AdminPanelLinks></AdminPanelLinks>
      <div className={classes.dashboard__Section_Container}>
        <Container>
          <Outlet />
        </Container>
      </div>
    </Layout>
  );
};

export default AdminPanel;
