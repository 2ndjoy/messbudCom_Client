import React from "react";
import fullscreen from "../../../assets/icons/fullscreen.svg";

const MealToCook = () => {
  return (
    <div className="bg-orange-100 flex items-center justify-between text-black  h-24 w-3/4  p-2 rounded">
      <div>
        <h1 className="text-2xl font-bold">02</h1>
        <p>meal to cook || noon || jan 27 </p>
      </div>
      <button>
        <img
          src={fullscreen}
          className=" bg-zinc-600 ml-9 rounded-full p-2 h-9"
          alt=""
        />
      </button>
    </div>
  );
};

export default MealToCook;
