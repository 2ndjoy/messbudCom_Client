import React from "react";
import Header from "../Header/Header";
import DashBoardLayout from "./DashBoardLayout";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <DashBoardLayout></DashBoardLayout>
      {/* <Outlet></Outlet> */}
      <Footer />
    </div>
  );
};

export default Main;
