import { AgGridColumn } from "ag-grid-react/lib/agGridColumn";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import React, { useState } from "react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

function Datafield() {
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
    <div className="ag-theme-alpine" style={{ height: 250, width: "100%" }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}
        rowSelection="multiple"
      >
        <AgGridColumn
          sortable={true}
          filter={true}
          checkboxSelection={true}
          field="Id"
        ></AgGridColumn>
        <AgGridColumn sortable={true} filter={true} field="Name"></AgGridColumn>
        <AgGridColumn
          sortable={true}
          filter={true}
          field="Email"
        ></AgGridColumn>
        <AgGridColumn
          sortable={true}
          filter={true}
          field="Gender"
        ></AgGridColumn>
        <AgGridColumn sortable={true} filter={true} field="DOB"></AgGridColumn>
        <AgGridColumn
          sortable={true}
          filter={true}
          field="Country"
        ></AgGridColumn>
        <AgGridColumn sortable={true} filter={true} field="City"></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

export default Datafield;
