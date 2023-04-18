import React from "react";
import Header from "../Header/Header";
import DashBoardLayout from "./DashBoardLayout";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <DashBoardLayout></DashBoardLayout>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
