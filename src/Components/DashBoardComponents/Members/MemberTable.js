import React from "react";

const MemberTable = () => {
  return (
    <div className="mx-3">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Meal</th>
              <th>Total Cost</th>
              <th>Total Expenses</th>
              <th>Total Payable</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Max Verstappen</td>
              <td>13</td>
              <td>1200</td>
              <td>1600</td>
              <td>4500</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>Lewis Hamilton</td>
              <td>13</td>
              <td>1200</td>
              <td>1600</td>
              <td>4500</td>
              <td>3000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberTable;
