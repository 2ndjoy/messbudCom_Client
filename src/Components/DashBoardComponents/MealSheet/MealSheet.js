import React from "react";
import MealTable from "./MealTable";
import MealBoard from "./MealBoard";
import MeelSheetTotal from "./MeelSheetTotal";
import ArchiveButton from "../ArchiveButton/ArchiveButton";
import "./MealSheet.css";

const MealSheet = () => {
  return (
    <>
      <div className="mealsheeet">
        <MealTable />
        <div className="grid gap-3 w-3/4 ml-5">
          <MealBoard />
          <MeelSheetTotal />
        </div>
      </div>

      <ArchiveButton />
    </>
  );
};

export default MealSheet;
