import React from "react";
import RunningMeals from "./RunningMeals";
import MealToCook from "./MealToCook";
import MealRate from "./MealRate";
import MyExpenses from "./MyExpenses";
import DashBoardBanner from "./DashBoardBanner";

const DashBoard = () => {
  return (
    <>
      <p className="lg:text-left text-center text-xl font-bold">Dashboard</p>

      <div className="grid my-9">
        <div className="grid lg:grid-cols-2 lg:mx-0 mx-3 gap-6 mb-9">
          <RunningMeals />
          <MealToCook />
          <MealRate />
          <MyExpenses />
        </div>
        <DashBoardBanner />
      </div>
    </>
  );
};

export default DashBoard;
