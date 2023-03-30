import React from "react";
import "./styles.css";

function AllMenuItem({ icon, name, description }) {
  return (
    <React.Fragment>
      <div className="all_menu_item hover1">
        <img src={icon} alt="" />
        <div className="all_menu_col">
          <span>{name}</span>
          <span>{description}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllMenuItem;
