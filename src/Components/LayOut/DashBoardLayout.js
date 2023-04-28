import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import {
  BsFileEarmarkSpreadsheet,
  BsHandbag,
  BsFileSpreadsheetFill,
  BsPeople,
} from "react-icons/bs";

const DashBoardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white text-base-content">
            {/* <!-- Sidebar content here --> */}

            <li>
              <Link to="/Dashboard">
                <RxDashboard /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/mealsheet">
                <BsFileEarmarkSpreadsheet /> Meal Sheet
              </Link>
            </li>
            <li>
              <Link to="/bazar">
                {" "}
                <BsHandbag />
                Bazar
              </Link>
            </li>
            <li>
              <Link to="/billsandpays">
                {" "}
                <BsFileSpreadsheetFill />
                Bills & Payables
              </Link>
            </li>
            <li>
              <Link to="/members">
                <BsPeople /> Members
              </Link>
            </li>
            <li>
              <Link to="/settings">
                {" "}
                <FiSettings />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
