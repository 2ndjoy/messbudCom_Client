import React from "react";
import BillsTable from "./BillsTable";
import BazarBoard from "../Bazar/BazarBoard";
import BazarNotes from "../Bazar/BazarNotes";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const BillsAndPayables = () => {
  return (
    <>
      <div className="mealsheeet">
        <BillsTable />

        <div className="grid gap-3 w-3/4 lg:ml-5 lg:mt-0 mt-9 ml-12">
          <BazarBoard />

          <BazarNotes />
        </div>
      </div>

      <ArchiveButton />
    </>
  );
};

export default BillsAndPayables;
