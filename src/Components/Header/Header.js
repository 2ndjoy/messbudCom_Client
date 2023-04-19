import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <label htmlFor="dashboard-drawer" className=" lg:hidden">
          <div className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </label>

        <div className="flex-1">
          <img src={logo} className="h-8" alt="" />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/VgQLh65/ANimee.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
