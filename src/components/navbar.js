import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="select-button">Add Row</div>
      <div className="select-button" style={{ width: 220 }}>
        Delete Selected Rows
      </div>
      <div className="select-button" style={{ width: 230 }}>
        Delete Non Selected Rows
      </div>
      <div className="select-button"> Submit</div>
    </div>
  );
}

export default Navbar;
