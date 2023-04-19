import React from "react";

const BazarTable = () => {
  return (
    <div className="lg:ml-3 lg:mt-0 mt-5 lg:w-full ml-14">
      <div className="overflow-x-auto">
        <table className="table table-compact lg:w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th></th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
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
              <td></td>
              <td>13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BazarTable;
