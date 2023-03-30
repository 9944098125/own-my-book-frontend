import React, { Fragment } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import "./styles.css";

function DOBSelect(props) {
  const view1 = useMediaQuery({
    query: "(min-width:539px)",
  });

  const view2 = useMediaQuery({
    query: "(min-width:850px)",
  });

  const view3 = useMediaQuery({
    query: "(min-width:1170px)",
  });
  const {
    bYear,
    bMonth,
    bDay,
    days,
    months,
    years,
    dateError,
    changeRegisterInputs,
  } = props;
  return (
    <Fragment>
      <div className="register-line-header">
        Date Of Birth <AiFillQuestionCircle />
      </div>
      <div
        style={{ marginBottom: dateError && !view3 && "70px" }}
        className="register-grid"
      >
        <select name="bDay" value={bDay} onChange={changeRegisterInputs}>
          {days.map((day, idx) => (
            <option value={day} key={idx}>
              {day}
            </option>
          ))}
        </select>
        <select name="bMonth" value={bMonth} onChange={changeRegisterInputs}>
          {months.map((month, idx) => (
            <option value={month} key={idx}>
              {month}
            </option>
          ))}
        </select>
        <select name="bYear" value={bYear} onChange={changeRegisterInputs}>
          {years.map((year, idx) => (
            <option value={year} key={idx}>
              {year}
            </option>
          ))}
        </select>
        {dateError && (
          <div
            style={{
              zIndex: "100",
              left: view3 && "-80%",
              top: view3 && "-2%",
            }}
            className="input-error-background"
          >
            <div
              className={`${view3 ? "error-arrow-left" : "error-arrow-bottom"}`}
            ></div>
            {dateError}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default DOBSelect;
