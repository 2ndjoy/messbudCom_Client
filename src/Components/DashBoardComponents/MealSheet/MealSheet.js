import React from "react";
import MealTable from "./MealTable";
import MealBoard from "./MealBoard";
import MeelSheetTotal from "./MeelSheetTotal";
import ArchiveButton from "../ArchiveButton/ArchiveButton";
import "./MealSheet.css";

const MealSheet = () => {
  return (
    <>
      <div className="mealsheeet mt-9 lg:mx-0 mx-1">
        <MealTable />
        <div className="grid gap-3 lg:w-3/4 w-full ml-5">
          <MealBoard />
          <MeelSheetTotal />
        </div>
      </div>

      <ArchiveButton />
    </>
  );
};

export default MealSheet;
