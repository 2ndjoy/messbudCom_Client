import React from "react";
import BazarTable from "./BazarTable";
import BazarBoard from "./BazarBoard";
import BazarNotes from "./BazarNotes";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const Bazar = () => {
  return (
    <>
      <div className="mealsheeet">
        <BazarTable />

        <div className="grid gap-3 w-3/4 ml-5">
          <BazarBoard />

          <BazarNotes />
        </div>
      </div>

      <ArchiveButton />
    </>
  );
};

export default Bazar;
