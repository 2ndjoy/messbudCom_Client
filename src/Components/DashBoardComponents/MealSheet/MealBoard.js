import React from "react";
import pause from "../../../assets/icons/circle-pause-solid.svg";

const MealBoard = () => {
  return (
    <div className="flex justify-between p-4 rounded lg:w-3/4 w-4/4 bg-zinc-800 text-white">
      <div className="">
        <small>Your meal is </small> <br />
        <h1 className="text-teal-400 text-4xl">Running</h1>
      </div>
      <button>
        <img src={pause} className="h-7 bg-white rounded-full " alt="" />
      </button>
    </div>
  );
};

export default MealBoard;
