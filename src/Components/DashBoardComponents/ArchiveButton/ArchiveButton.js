import React from "react";
import StickyButton from "./StickyButton";

function ArchiveButton() {
  return (
    <div className="relative h-screen">
      {/* Your app content */}
      <StickyButton>
        <label htmlFor="my-modal-7" className="">
          Archive
        </label>
      </StickyButton>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-7"
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
            <label htmlFor="my-modal-7" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveButton;
