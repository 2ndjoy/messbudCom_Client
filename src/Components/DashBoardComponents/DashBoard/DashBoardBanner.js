import React from "react";

const DashBoardBanner = () => {
  return (
    <div className="flex justify-center lg:mx-0 mx-5">
      <div
        style={{ backgroundColor: "#F5EBDF" }}
        className=" w-full px-3 py-6 grid gap-2 mt-9 rounded"
      >
        <b> Don't forget to enter your bazar</b>

        <h1 className="text-3xl">Its easier to track your expense.</h1>
        <div>
          <button className="bg-black text-white rounded py-2 px-4">
            Enter now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardBanner;
