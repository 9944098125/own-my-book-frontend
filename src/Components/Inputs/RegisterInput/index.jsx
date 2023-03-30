import { ErrorMessage, useField } from "formik";
import React, { Fragment } from "react";
import errorIcon from "../../../Assets/Images/error-icon.png";
import { useMediaQuery } from "react-responsive";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import "./styles.css";

const RegisterInput = ({ placeholder, bottom, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [field, meta] = useField(props);
  const view1 = useMediaQuery({
    query: "(min-width:539px)",
  });

  const view2 = useMediaQuery({
    query: "(min-width:850px)",
  });

  const view3 = useMediaQuery({
    query: "(min-width:1170px)",
  });

  const test1 = view3 && field.name === "firstName";
  const test2 = view3 && field.name === "lastName";

  return (
    <Fragment>
      <div className="input-container register-input-wrap">
        <input
          style={{
            width: `${
              view1 && (field.name === "firstName" || field.name === "lastName")
                ? "100%"
                : view1 && (field.name === "email" || field.name === "password")
                ? "370px"
                : "300px"
            }`,
          }}
          className={meta.touched && meta.error ? "error-field" : ""}
          type={
            field.name === "password"
              ? showPassword
                ? "text"
                : "password"
              : field.type
          }
          placeholder={placeholder}
          name={field.name}
          {...field}
          {...props}
        />
        {field.name === "password" &&
          (showPassword ? (
            <MdVisibilityOff
              onClick={toggleShowPassword}
              className={
                meta.touched && meta.error ? "eye-icon-with-error" : "eye-icon"
              }
            />
          ) : (
            <MdVisibility
              onClick={toggleShowPassword}
              className={
                meta.touched && meta.error ? "eye-icon-with-error" : "eye-icon"
              }
            />
          ))}
        {meta.touched && meta.error && (
          <div
            style={{
              transform: "translateY(2px)",
              left: `${test1 ? "-175%" : test2 ? "107%" : ""}`,
            }}
            className={
              view3
                ? "input-error-background input-error-desktop"
                : "input-error-background"
            }
          >
            {meta.touched && meta.error && <ErrorMessage name={field.name} />}
            {meta.touched && meta.error && (
              <div
                className={
                  view3 && field.name !== "lastName"
                    ? "error-arrow-left"
                    : view3 && field.name === "lastName"
                    ? "error-arrow-right"
                    : !view3 && "error-arrow-bottom"
                }
              ></div>
            )}
          </div>
        )}
        {meta.touched && meta.error && (
          <img
            src={errorIcon}
            alt="error"
            className="error-icon"
            style={{ top: !bottom && !view2 && "63%" }}
          />
        )}
      </div>
    </Fragment>
  );
};

export default RegisterInput;
