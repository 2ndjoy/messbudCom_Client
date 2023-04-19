import React from "react";
import bell from "../../../assets/icons/bell.svg";

const MealRate = () => {
  return (
    <div className="bg-white border flex items-center justify-between text-black  h-24   lg:w-3/4 w-4/4  p-2 rounded">
      <div>
        <h1 className="text-2xl font-bold">54.46</h1>
        <p>meal rate </p>
      </div>
      <button>
        <img
          src={bell}
          className=" bg-orange-300 ml-9 rounded p-2 h-9"
          alt=""
        />
      </button>
    </div>
  );
};

export default MealRate;
