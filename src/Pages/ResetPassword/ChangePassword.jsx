import { Form, Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/Inputs/LoginInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function ChangePassword({
  error,
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
}) {
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, // eslint-disable-line
        " Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character" // eslint-disable-line
      ),
    confirmPassword: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  return (
    <React.Fragment>
      <div className="reset_form">
        <div className="reset_form_header">Change Password</div>
        <div className="reset_form_text">Please enter the new password</div>
        <Formik
          enableReinitialize
          initialValues={{
            password,
            confirmPassword,
          }}
          validationSchema={validationSchema}
          // onSubmit={() => {
          //   verifyCode();
          // }}
        >
          {(formik) => (
            <Form>
              <LoginInput
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
              />
              <LoginInput
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm New Password"
              />
              {error && <div className="error_text">{error}</div>}
              <div className="reset_form_btns">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/login"
                  className="gray-btn"
                >
                  Cancel
                </Link>
                <button type="submit" className="blue-btn">
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
}

export default ChangePassword;
