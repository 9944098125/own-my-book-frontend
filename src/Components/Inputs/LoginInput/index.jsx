import { ErrorMessage, useField } from "formik";
import React, { Fragment } from "react";
import errorIcon from "../../../Assets/Images/error-icon.png";
import { useMediaQuery } from "react-responsive";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import "./styles.css";

const LoginInput = ({ placeholder, bottom, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const desktopView = useMediaQuery({
    query: "(min-width:850px)",
  });
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <div className="input-container">
        {!bottom && meta.touched && meta.error && (
          <div
            className={
              desktopView
                ? "input-error-background input-error-desktop"
                : "input-error-background"
            }
          >
            {meta.touched && meta.error && <ErrorMessage name={field.name} />}
            {meta.touched && meta.error && (
              <div
                className={desktopView ? "error-arrow-left" : "error-arrow-top"}
              ></div>
            )}
          </div>
        )}
        <input
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
          <img
            src={errorIcon}
            alt="error"
            className="error-icon"
            style={{ top: !bottom && !desktopView && "63%" }}
          />
        )}

        {bottom && meta.touched && meta.error && (
          <div
            className={
              desktopView
                ? "input-error-background input-error-desktop"
                : "input-error-background"
            }
          >
            {meta.touched && meta.error && <ErrorMessage name={field.name} />}
            {meta.touched && meta.error && (
              <div
                className={
                  desktopView ? "error-arrow-left" : "error-arrow-bottom"
                }
              ></div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LoginInput;
