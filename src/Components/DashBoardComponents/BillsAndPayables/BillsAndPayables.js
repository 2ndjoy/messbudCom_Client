import React from "react";
import BillsTable from "./BillsTable";
import BazarBoard from "../Bazar/BazarBoard";
import BazarNotes from "../Bazar/BazarNotes";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const BillsAndPayables = () => {
  return (
    <>
      <div className="lg:flex justify-around">
        <div className="w-3/4 m-3">
          <BillsTable />
        </div>
        <div className="lg:grid w-3/4">
          <div className=" m-3">
            <BazarBoard />
          </div>
          <div className=" m-3">
            <BazarNotes />
          </div>
        </div>
      </div>
      <ArchiveButton />
    </>
  );
};

export default BillsAndPayables;
