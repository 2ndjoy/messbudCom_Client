import React from "react";

import { FiSettings } from "react-icons/fi";

const RunningMeals = () => {
  return (
    <div
      style={{ backgroundColor: "#323543", color: "#F4EADF" }}
      className="flex items-center  h-24  lg:w-3/4 w-4/4  justify-between p-2 rounded"
    >
      <div>
        <h1 className="text-2xl font-bold">02</h1>
        <p>
          my meal today || <span className="text-teal-400">running</span>
        </p>
      </div>
      <button className="">
        <label htmlFor="my-modal-3" className="">
          <p
            style={{ backgroundColor: "#F4EADF", color: "gray" }}
            className="text-2xl p-2 rounded-full"
          >
            {" "}
            <FiSettings />
          </p>
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg text-black font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4 text-black ">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-3" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default RunningMeals;
