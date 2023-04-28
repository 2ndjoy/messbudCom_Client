import React from "react";

import { MdOutlineOpenInFull } from "react-icons/md";

const MealToCook = () => {
  return (
    <div
      style={{ backgroundColor: "#F5EBDF" }}
      className="flex items-center justify-between h-24 text-black  lg:w-3/4 w-4/4  p-2 rounded"
    >
      <div>
        <h1 className="text-2xl font-bold">02</h1>
        <p>meal to cook || noon || jan 27 </p>
      </div>
      <button>
        <label htmlFor="my-modal-4" className="">
          {" "}
          <p
            style={{ backgroundColor: "#333542", color: "#F4EADF" }}
            className="text-2xl p-2 rounded-full"
          >
            <MdOutlineOpenInFull />
          </p>
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-4"
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
              <label htmlFor="my-modal-4" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default MealToCook;
