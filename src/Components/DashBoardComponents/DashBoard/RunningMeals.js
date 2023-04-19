import React from "react";
import setting from "../../../assets/icons/gear-solid.svg";

const RunningMeals = () => {
  return (
    <div
      style={{ backgroundColor: "#323543" }}
      className="flex items-center  h-24  lg:w-3/4 w-4/4  justify-between text-white p-2 rounded"
    >
      <div>
        <h1 className="text-2xl font-bold">02</h1>
        <p>
          my meal today || <span className="text-teal-400">running</span>
        </p>
      </div>
      <button className="">
        <img
          src={setting}
          className="bg-orange-100 ml-9 rounded-full p-2 h-9"
          alt=""
        />
      </button>
    </div>
  );
};

export default RunningMeals;
