import React from "react";

function Shortcuts({ link, img, name }) {
  return (
    <React.Fragment>
      <a href={link} target="_blank" rel="noreferrer" className="shortcut_item">
        <img src={img} alt="" />
        <span>{name}</span>
      </a>
    </React.Fragment>
  );
}

export default Shortcuts;
