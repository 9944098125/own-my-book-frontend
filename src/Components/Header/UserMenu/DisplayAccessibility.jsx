import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillMoonFill, BsFillKeyboardFill } from "react-icons/bs";
import { MdViewCompactAlt } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";

import "../styles.css";

function DisplayAccessibility({ setVisibility }) {
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
          Display & Accessibility
        </div>
        <div className="menu_main">
          <div className="small_circle">
            <BsFillMoonFill />
          </div>
          <div className="menu_col">
            <div className="menu_span1">Dark Mode</div>
            <div className="menu_span2">
              You can adjust the brightness of your myBook, so that it gives a
              break to your eyes
            </div>
          </div>
        </div>
        <label htmlFor="darkOff" className="hover1">
          <span>OFF</span>
          <input type="radio" id="darkOff" name="dark" />
        </label>
        <label htmlFor="darkOn" className="hover1">
          <span>ON</span>
          <input type="radio" id="darkOn" name="dark" />
        </label>

        <div className="menu_main">
          <div className="small_circle">
            <MdViewCompactAlt />
          </div>
          <div className="menu_col">
            <div className="menu_span1">Compact Mode</div>
            <div className="menu_span2">
              You can adjust the brightness of your myBook, so that it gives a
              break to your eyes
            </div>
          </div>
        </div>
        <label htmlFor="compactOff" className="hover1">
          <span>OFF</span>
          <input type="radio" id="compactOff" name="compact" />
        </label>
        <label htmlFor="compactOn" className="hover1">
          <span>ON</span>
          <input type="radio" id="compactOn" name="compact" />
        </label>
        <div className="menu_item hover3">
          <div className="small_circle">
            <BsFillKeyboardFill />
          </div>
          <span>Keyboard</span>
          <div className="rArrow">
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DisplayAccessibility;
