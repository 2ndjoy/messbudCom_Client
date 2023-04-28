import React from "react";
import { BsBucket } from "react-icons/bs";
const BazarBoard = () => {
  return (
    <div
      style={{ backgroundColor: "#673258" }}
      className="flex justify-between p-4 rounded lg:w-3/4 w-4/4 items-center  py-8  h-3/4 text-white "
    >
      <div className="">
        <h1 className="text-white-400 text-3xl font-semibold">Express entry</h1>{" "}
        <br />
        <p>Bazar, grocery and others.</p>
      </div>
      <button>
        <label htmlFor="my-modal-5" className="">
          <p className="text-2xl p-2 text-black bg-white rounded-full">
            <BsBucket />
          </p>
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-5"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg text-black font-bold">
              Congratulations random Internet user!
            </h3>
            <p className="py-4 text-black ">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default BazarBoard;
