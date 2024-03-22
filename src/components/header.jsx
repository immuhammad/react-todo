import React, { Component } from "react";

function Header({ handletoggledark }) {
  return (
    <div className="header ">
    
      <h1  >Notes</h1>
      <button
        className="save"
        onClick={() =>
          handletoggledark((previousdarkmode) => !previousdarkmode)
        }
      >
        {" "}
        Toggle
      </button>
    </div>
  );
}

export default Header;
