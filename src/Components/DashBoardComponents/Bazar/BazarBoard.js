import React from "react";
import pause from "../../../assets/icons/circle-pause-solid.svg";
import { BsBucket } from "react-icons/bs";
const BazarBoard = () => {
  return (
    <div
      style={{ backgroundColor: "#673258" }}
      className="flex justify-between p-4 rounded lg:w-3/4 w-4/4 items-center  py-8  h-3/4 text-white "
    >
      <div className="">
        <h1 className="text-white-400 text-3xl font-semibold">Express entry</h1>{" "}
        <br />
        <p>Bazar, grocery and others.</p>
      </div>
      <button>
        <p className="text-2xl p-2 text-black bg-white rounded-full">
          <BsBucket />
        </p>
        {/* <img
          src={pause}
          style={{ backgroundColor: "#F3E7D6" }}
          className="h-7 rounded-full w-full"
          alt=""
        /> */}
      </button>
    </div>
  );
};

export default BazarBoard;
