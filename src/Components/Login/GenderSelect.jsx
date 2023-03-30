import React, { Fragment } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

function GenderSelect({ changeRegisterInputs, genderError }) {
  const view1 = useMediaQuery({
    query: "(min-width:539px)",
  });

  const view2 = useMediaQuery({
    query: "(min-width:850px)",
  });

  const view3 = useMediaQuery({
    query: "(min-width:1170px)",
  });
  return (
    <Fragment>
      <div className="register-line-header">
        Gender <AiFillQuestionCircle />
      </div>
      <div
        style={{ marginBottom: genderError && !view3 && "70px" }}
        className="register-grid"
      >
        <label htmlFor="male">
          Male
          <input
            name="gender"
            type="radio"
            id="male"
            value="male"
            onChange={changeRegisterInputs}
          />
        </label>
        <label htmlFor="female">
          Female
          <input
            name="gender"
            type="radio"
            id="female"
            value="female"
            onChange={changeRegisterInputs}
          />
        </label>
        <label htmlFor="custom">
          Custom
          <input
            name="gender"
            type="radio"
            id="custom"
            value="custom"
            onChange={changeRegisterInputs}
          />
        </label>
        {genderError && (
          <div
            style={{ left: view3 && "-80%", top: view3 && "-2%" }}
            className="input-error-background"
          >
            <div
              className={`${view3 ? "error-arrow-left" : "error-arrow-bottom"}`}
            ></div>
            {genderError}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default GenderSelect;
