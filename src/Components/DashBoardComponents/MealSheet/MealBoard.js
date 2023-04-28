import React, { useState } from "react";
import { BsFillPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";

const MealBoard = () => {
  const [play, setPlay] = useState(true);

  return (
    <div
      style={{ backgroundColor: "#333542", color: "#FEFEFF" }}
      className="flex justify-between p-4 rounded lg:w-3/4 w-4/4"
    >
      <div className="">
        <small>Your meal is </small> <br />
        {play ? (
          <h1 className="text-teal-400 text-4xl">Running</h1>
        ) : (
          <h1 className="text-teal-400 text-4xl">Paused</h1>
        )}
      </div>
      <button
        onClick={() => {
          setPlay(!play);
        }}
      >
        <p className="text-2xl p-2 rounded-full">
          {play ? <BsFillPauseCircleFill /> : <BsPlayCircleFill />}
        </p>
      </button>
    </div>
  );
};

export default MealBoard;
