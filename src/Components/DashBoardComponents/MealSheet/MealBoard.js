import React from "react";
import { BsFillPauseCircleFill } from "react-icons/bs";

const MealBoard = () => {
  return (
    <div
      style={{ backgroundColor: "#333542", color: "#FEFEFF" }}
      className="flex justify-between p-4 rounded lg:w-3/4 w-4/4"
    >
      <div className="">
        <small>Your meal is </small> <br />
        <h1 className="text-teal-400 text-4xl">Running</h1>
      </div>
      <button>
        <p className="text-2xl p-2 rounded-full">
          <BsFillPauseCircleFill />
        </p>
        {/* <img src={pause} className="h-7 bg-white rounded-full " alt="" /> */}
      </button>
    </div>
  );
};

export default MealBoard;
