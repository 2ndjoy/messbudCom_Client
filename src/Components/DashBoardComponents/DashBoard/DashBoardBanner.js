import React from "react";

const DashBoardBanner = () => {
  return (
    <div className="bg-orange-100 w-5/6  px-3 py-6 grid gap-2 mt-9 rounded">
      <small>Don't forget to enter your bazar</small>
      <h1 className="text-3xl">Its easier to track your expense.</h1>
      <div>
        <button className="bg-black text-white rounded py-2 px-4">
          Enter now
        </button>
      </div>
    </div>
  );
};

export default DashBoardBanner;
