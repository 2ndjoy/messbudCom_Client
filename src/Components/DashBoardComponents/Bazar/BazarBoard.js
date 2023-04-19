import React from "react";
import pause from "../../../assets/icons/circle-pause-solid.svg";

const BazarBoard = () => {
  return (
    <div
      style={{ backgroundColor: "#673258" }}
      className="flex justify-between items-center p-4 py-8 rounded w-3/4 h-3/4 text-white"
    >
      <div className="">
        <h1 className="text-white-400 text-3xl font-semibold">Express entry</h1>{" "}
        <br />
        <p>Bazar, grocery and others.</p>
      </div>
      <button>
        <img
          src={pause}
          style={{ backgroundColor: "#F3E7D6" }}
          className="h-7 rounded-full w-full"
          alt=""
        />
      </button>
    </div>
  );
};

export default BazarBoard;
