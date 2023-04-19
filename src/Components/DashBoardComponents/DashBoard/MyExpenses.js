import React from "react";
import wallet from "../../../assets/icons/wallet-solid.svg";

const MyExpenses = () => {
  return (
    <div className="bg-white border flex items-center justify-between text-black  h-24   lg:w-3/4 w-4/4   p-2 rounded">
      <div>
        <h1 className="text-2xl font-bold">1460</h1>
        <p>my expenses </p>
      </div>
      <button>
        <img
          src={wallet}
          className=" bg-green-300 ml-9 rounded p-2 h-9"
          alt=""
        />
      </button>
    </div>
  );
};

export default MyExpenses;
