import React from "react";
import DotLoader from "react-spinners/DotLoader";

import "./styles.css";

function ActivateForm({ type, header, text, loading }) {
  return (
    <React.Fragment>
      <div className="blur">
        <div className="popup">
          <div
            className={`popup_header ${
              type === "success" ? "success_text" : "error_text"
            }`}
          >
            {header}
          </div>
          <div className="popup_header">{text}</div>
          <DotLoader color="blue" size={30} loading={true} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ActivateForm;
