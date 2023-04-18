import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";

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
          <ul className="menu p-4 w-80 text-base-content">
            {/* <!-- Sidebar content here --> */}

            <li>
              <Link to="/Dashboard"> Dashboard</Link>
            </li>
            <li>
              <Link to="/mealsheet"> Meal Sheet</Link>
            </li>
            <li>
              <Link to="/bazar"> Bazar</Link>
            </li>
            <li>
              <Link to="/billsandpays"> Bills & Payables</Link>
            </li>
            <li>
              <Link to="/members"> Members</Link>
            </li>
            <li>
              <Link to="/settings"> Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
