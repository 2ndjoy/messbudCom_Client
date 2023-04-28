import React from "react";
import notes from "../../../assets/icons/note-sticky-solid.svg";

const BazarNotes = () => {
  return (
    <div className="">
      <label
        htmlFor="my-modal-6"
        className="btn btn-ghost flex w-3/4 justify-center items-center gap-2 bg-orange-50 p-3"
      >
        <img src={notes} className="h-5" alt="" />{" "}
        <h1 className="text-lg font-semibold">Notes</h1>
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-black font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4 text-black ">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BazarNotes;
