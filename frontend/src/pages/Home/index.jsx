import React from "react";
import Layout from "../../layouts";
import FirstSection from "./FirstSection";
import MyProjectSection from "./MyProjectSection";
import MySillsSection from "./MySillsSection";
const HomePage = () => {
  return (
    <Layout>
      <FirstSection />
      <MyProjectSection />
      <MySillsSection />
    </Layout>
  );
};

export default HomePage;
