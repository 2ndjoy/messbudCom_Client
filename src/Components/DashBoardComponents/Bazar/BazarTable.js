import React from "react";

const BazarTable = () => {
  return (
    <div className="w-full">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
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
              <td>
                <div className="collapse">
                  <input type="checkbox" />
                  <div className="collapse-title"> 2022-01-01</div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                {" "}
                <div className="collapse">
                  <input type="checkbox" />
                  <div className="collapse-title"> 2022-01-01</div>
                  <div className="collapse-content">
                    <p>hello</p>
                  </div>
                </div>
              </td>
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

export default BazarTable;
