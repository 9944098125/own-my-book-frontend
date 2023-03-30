import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsInboxesFill } from "react-icons/bs";
import { MdReportProblem } from "react-icons/md";

import "../styles.css";

function HelpSupport({ setVisibility }) {
  return (
    <React.Fragment>
      <div className="absolute_wrap">
        <div className="absolute_wrap_header">
          <div
            style={{ cursor: "pointer" }}
            className="circle hover1"
            onClick={() => setVisibility(0)}
          >
            <AiOutlineArrowLeft />
          </div>
          Help & Support
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <BiHelpCircle />
          </div>
          <span>Help Center</span>
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <BsInboxesFill />
          </div>
          <span>Support Inbox</span>
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <MdReportProblem />
          </div>
          <span>Report a Problem</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HelpSupport;
