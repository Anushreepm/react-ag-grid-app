import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import React, { useState } from "react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function SubmittedData() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    { Id: "Toyota", model: "Celica", price: 35000 },
    { Id: "Ford", model: "Mondeo", price: 32000 },
    { Id: "Porsche", model: "Boxter", price: 72000 },
  ]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }
  return (
    <>
      <div
        style={{
          height: 50,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        Submitted Data
      </div>
      <div className="ag-theme-alpine" style={{ height: 250, width: "100%" }}>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          rowSelection="multiple"
        >
          <AgGridColumn
            id="Id"
            style={{ width: 100 }}
            filter={true}
            field="Id"
          ></AgGridColumn>
          <AgGridColumn
            id="Name"
            style={{ width: 135 }}
            filter={true}
            field="Name"
          ></AgGridColumn>
          <AgGridColumn
            id="Email"
            style={{ width: 200 }}
            filter={true}
            field="Email"
          ></AgGridColumn>
          <AgGridColumn
            id="Gender"
            style={{ width: 135 }}
            filter={true}
            field="Gender"
          ></AgGridColumn>
          <AgGridColumn
            id="DOB"
            style={{ width: 135 }}
            filter={true}
            field="DOB"
          ></AgGridColumn>
          <AgGridColumn
            id="Country"
            style={{ width: 135 }}
            filter={true}
            field="Country"
          ></AgGridColumn>
          <AgGridColumn
            id="City"
            style={{ width: 135 }}
            filter={true}
            field="City"
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </>
  );
}

export default SubmittedData;
