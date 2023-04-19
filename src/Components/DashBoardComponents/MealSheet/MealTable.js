import React from "react";

const MealTable = () => {
  return (
    <div className="">
      {/* Table */}
      <div className="overflow-x-auto scroll-m-0">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>2022-01-01</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2022-01-01</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealTable;
