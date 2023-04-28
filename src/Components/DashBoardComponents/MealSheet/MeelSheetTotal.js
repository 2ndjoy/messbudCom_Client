import React from "react";

const MeelSheetTotal = () => {
  return (
    <div style={{ backgroundColor: "#F4EADF" }} className="grid lg:w-3/4 p-3">
      <div className="flex justify-between">
        <div>Total Expenses</div>
        <div>1200/=</div>
      </div>
      <div className="flex justify-between">
        <div>Total Meal Cost</div>
        <div>1200/=</div>
      </div>
      <hr />{" "}
      <div className="flex justify-between">
        <div>Due</div>
        <div>1200/=</div>
      </div>
    </div>
  );
};

export default MeelSheetTotal;
