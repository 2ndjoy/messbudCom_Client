import React from "react";
import BazarTable from "./BazarTable";
import BazarBoard from "./BazarBoard";
import BazarNotes from "./BazarNotes";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const Bazar = () => {
  return (
    <>
      <div className="lg:flex justify-around">
        <div className="w-3/4 m-3">
          <BazarTable />
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

export default Bazar;
