import React from "react";
import notes from "../../../assets/icons/note-sticky-solid.svg";

const BazarNotes = () => {
  return (
    <div className="btn btn-ghost flex w-3/4 justify-center items-center gap-2 bg-orange-50 p-3">
      <img src={notes} className="h-5" alt="" />{" "}
      <h1 className="text-lg font-semibold">Notes</h1>
    </div>
  );
};

export default BazarNotes;
