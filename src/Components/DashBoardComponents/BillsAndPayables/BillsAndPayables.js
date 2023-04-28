import React from "react";
import BillsTable from "./BillsTable";
import BazarBoard from "../Bazar/BazarBoard";
import BazarNotes from "../Bazar/BazarNotes";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const BillsAndPayables = () => {
  return (
    <>
      <p className="lg:text-left text-center text-xl font-bold">
        Bills & Payables
      </p>
      <div className="mealsheeet  mt-9">
        <BillsTable />

        <div className="grid gap-3 w-3/4 lg:ml-5 ml-12">
          <BazarBoard />

          <BazarNotes />
        </div>
      </div>

      <ArchiveButton />
    </>
  );
};

export default BillsAndPayables;
