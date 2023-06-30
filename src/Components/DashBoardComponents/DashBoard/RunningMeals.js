import React, { useState } from "react";

import { FiSettings } from "react-icons/fi";

const RunningMeals = () => {
  const [myMeal, setMyMeal] = useState(0);
  const increaseMeal = () => {
    setMyMeal(myMeal + 1);
  };
  const decreaseMeal = () => {
    if (myMeal === 0) {
      setMyMeal(myMeal);
    } else {
      setMyMeal(myMeal - 1);
    }
  };

  const okaay = () => {
    alert(myMeal);
  };
  return (
    <div
      style={{ backgroundColor: "#323543", color: "#F4EADF" }}
      className="flex items-center  h-24  lg:w-3/4 w-4/4  justify-between p-2 rounded"
    >
      <div>
        <h1 className="text-2xl font-bold">{myMeal}</h1>
        <p>
          my meal today || <span className="text-teal-400">running</span>
        </p>
      </div>
      <button className="">
        <label htmlFor="my-modal-3" className="">
          <p
            style={{ backgroundColor: "#F4EADF", color: "gray" }}
            className="text-2xl p-2 rounded-full"
          >
            {" "}
            <FiSettings />
          </p>
        </label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg text-black font-bold">Set your meal</h3>
            <p className="py-4 flex justify-center gap-3 text-black items-center">
              <button
                onClick={increaseMeal}
                className="bg-green-600 p-2 rounded-lg"
              >
                +
              </button>
              <p>{myMeal}</p>
              <button
                onClick={decreaseMeal}
                className="bg-blue-600 p-2 rounded-lg"
              >
                -
              </button>
            </p>
            <div className="modal-action">
              <label onClick={okaay} htmlFor="my-modal-3" className="btn">
                Okay
              </label>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default RunningMeals;
