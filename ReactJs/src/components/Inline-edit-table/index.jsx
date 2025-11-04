import { useState } from "react";
import TextInput from "./text-input";

export default function InlineEditTable() {
  const [tableData, setTableData] = useState([
    {
      name: "Siya",
      sirname: "Thorat",
      city: "Karad",
    },
    // {
    //   name: "Neha",
    //   sirname: "Thorat",
    //   city: "Pune",
    // },
  ]);

  const saveUpdateValueHandler = (index, newValue) => {
    const clonedTableData = [...tableData];

    console.log({ index, newValue, row: clonedTableData[index[0]] });
    clonedTableData[index[0]][index[1]] = newValue;
    console.log({ clonedTableData });
    setTableData(clonedTableData);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sirname</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((table, rowIndex) => {
            return (
              <tr style={{ border: "1px solid black" }} key={table}>
                {Object.keys(table).map((key, colIndex) => {
                  return (
                    <TextInput
                      index={[rowIndex, key]}
                      value={table[key]}
                      key={table[key]}
                      saveUpdateValueHandler={saveUpdateValueHandler}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
