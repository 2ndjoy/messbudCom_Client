import React from "react";
import { BiDish } from "react-icons/bi";

const MealRate = () => {
  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className="border flex items-center justify-between text-black  h-24   lg:w-3/4 w-4/4  p-2 rounded"
    >
      <div>
        <h1 className="text-2xl font-bold">54.46</h1>
        <p>meal rate </p>
      </div>
      <button>
        <p
          style={{ backgroundColor: "#FEF4DF", color: "#FFB31D" }}
          className="text-2xl text-orange-600 bg-orange-300 p-2 rounded"
        >
          <BiDish />
        </p>
      </button>
    </div>
  );
};

export default MealRate;
