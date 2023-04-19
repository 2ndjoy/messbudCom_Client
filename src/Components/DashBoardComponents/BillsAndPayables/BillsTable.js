import React from "react";

const BillsTable = () => {
  return (
    <div className="lg:ml-3 lg:w-full ml-14">
      <div className="overflow-x-auto">
        <table className="table table-compact lg:w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th></th>
              <th></th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Cy Ganderton</td>
              <td></td>
              <td></td>
              <td>333</td>
            </tr>
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillsTable;
