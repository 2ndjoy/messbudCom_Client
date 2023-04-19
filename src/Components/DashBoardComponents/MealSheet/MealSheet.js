import React from "react";
import MealTable from "./MealTable";
import MealBoard from "./MealBoard";
import MeelSheetTotal from "./MeelSheetTotal";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const MealSheet = () => {
  return (
    <>
      <div className="lg:flex justify-around">
        <div className="w-3/4 m-3">
          <MealTable />
        </div>
        <div className="lg:grid w-3/4">
          <div className=" m-3">
            <MealBoard />
          </div>
          <div className="w-3/4 m-3">
            <MeelSheetTotal />
          </div>
        </div>
      </div>
      <ArchiveButton />
    </>
  );
};

export default MealSheet;
