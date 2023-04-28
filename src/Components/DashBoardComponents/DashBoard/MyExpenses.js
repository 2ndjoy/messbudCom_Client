import React from "react";
import { FaWallet } from "react-icons/fa";

const MyExpenses = () => {
  return (
    <div
      style={{ backgroundColor: "#FAFAFA" }}
      className=" border flex items-center justify-between text-black  h-24  lg:w-3/4 w-4/4   p-2 rounded"
    >
      <div>
        <h1 className="text-2xl font-bold">1460</h1>
        <p>my expenses </p>
      </div>
      <button>
        <p
          style={{ backgroundColor: "#C8F6F5", color: "#1BC4BC" }}
          className=" text-2xl p-2 rounded"
        >
          <FaWallet />
        </p>
      </button>
    </div>
  );
};

export default MyExpenses;
