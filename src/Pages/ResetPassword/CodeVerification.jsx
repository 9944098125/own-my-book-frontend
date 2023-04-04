import { Form, Formik } from "formik";
import React from "react";
import LoginInput from "../../Components/Inputs/LoginInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import { baseUrl } from "../../baseUrl";
import "./styles.css";

function CodeVerification({
  error,
  code,
  setCode,
  setError,
  userInfo,
  setVisible,
}) {
  const validationSchema = Yup.object({
    code: Yup.string().required("Must Provide a Code..."),
  });

  const verifyCode = async () => {
    const { email } = userInfo;
    try {
      await axios.post(`${baseUrl}/users/validateResetCode`, {
        email,
        code,
      });
      setError("");
      setVisible(3);
    } catch (err) {
      setError(err.response.data.message);
      console.log(code, email);
    }
  };

  return (
    <React.Fragment>
      <div className="reset_form">
        <div className="reset_form_header">Code verification</div>
        <div className="reset_form_text">
          Please enter code that been sent to your email.
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            code,
          }}
          validationSchema={validationSchema}
          onSubmit={() => {
            verifyCode();
          }}
        >
          {(formik) => (
            <Form>
              <LoginInput
                type="text"
                name="code"
                onChange={(e) => setCode(e.target.value)}
                placeholder="Code"
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

export default CodeVerification;
