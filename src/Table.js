import React from "react";

const Table = () => {
  return (
    <table id="customers">
      <tr>
        <th>Grade</th>
        <th>Score Range</th>
      </tr>
      <tr>
        <td>A</td>
        <td>0 to 13</td>
      </tr>
      <tr>
        <td>B</td>
        <td>14 to 27</td>
      </tr>
      <tr>
        <td>C</td>
        <td>28+</td>
      </tr>
    </table>
  );
};

export default Table;
