import React from "react";
import RunningMeals from "./RunningMeals";
import MealToCook from "./MealToCook";
import MealRate from "./MealRate";
import MyExpenses from "./MyExpenses";
import DashBoardBanner from "./DashBoardBanner";

const DashBoard = () => {
  return (
    <div className="grid">
      <div className="grid lg:grid-cols-2 lg:ml-0 ml-11 gap-6">
        <RunningMeals />
        <MealToCook />
        <MealRate />
        <MyExpenses />
      </div>
      <DashBoardBanner />
    </div>
  );
};

export default DashBoard;
