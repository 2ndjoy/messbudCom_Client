import React from "react";
import setting from "../../../assets/icons/gear-solid.svg";

const RunningMeals = () => {
  return (
    <div className="bg-zinc-800 flex items-center text-white w-64 h-18 p-2 rounded">
      <div>
        <h1 className="text-3xl font-semibold">02</h1>
        <p>
          my meal today <span className="text-blue-700">running</span>
        </p>
      </div>
      <div>
        <img
          src={setting}
          className="bg-orange-100 ml-9 rounded-full p-2 h-9"
          alt=""
        />
      </div>
    </div>
  );
};

export default RunningMeals;
