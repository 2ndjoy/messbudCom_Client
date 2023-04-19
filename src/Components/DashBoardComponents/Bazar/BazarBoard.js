import React from "react";
import pause from "../../../assets/icons/circle-pause-solid.svg";

const BazarBoard = () => {
  return (
    <div className="flex justify-between items-center p-4 rounded w-3/4 bg-fuchsia-900 text-white">
      <div className="">
        <h1 className="text-white-400 text-4xl">Express entry</h1> <br />
        <p>Bazar, grocery and others.</p>
      </div>
      <button>
        <img src={pause} className=" h-7 bg-white rounded-full " alt="" />
      </button>
    </div>
  );
};

export default BazarBoard;
