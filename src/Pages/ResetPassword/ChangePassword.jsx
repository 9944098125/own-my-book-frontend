import { Form, Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/Inputs/LoginInput";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import { baseUrl } from "../../baseUrl";
import "./styles.css";

function ChangePassword({
  error,
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  setError,
  email,
  user,
}) {
  const navigate = useNavigate();
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

  const changePassword = async () => {
    try {
      await axios.patch(`${baseUrl}/users/changePassword`, { email, password });
      setError("");
      if (user === null) {
        navigate("/login");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

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
          onSubmit={() => {
            changePassword();
          }}
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
