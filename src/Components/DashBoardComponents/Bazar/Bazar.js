import React from "react";
import BazarTable from "./BazarTable";
import BazarBoard from "./BazarBoard";
import BazarNotes from "./BazarNotes";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const Bazar = () => {
  return (
    <>
      <p className="lg:text-left text-center text-xl font-bold">Bazar</p>
      <div className="mealsheeet  mt-9">
        <BazarTable />

        <div className="grid gap-3 w-3/4 lg:ml-5 ml-12">
          <BazarBoard />

          <BazarNotes />
        </div>
      </div>

      <ArchiveButton />
    </>
  );
};

export default Bazar;
