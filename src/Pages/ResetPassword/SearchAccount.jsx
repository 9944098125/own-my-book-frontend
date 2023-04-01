import React from "react";
import { Formik, Form } from "formik";
import LoginInput from "../../Components/Inputs/LoginInput";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

import { baseUrl } from "../../baseUrl";
import "./styles.css";

function SearchAccount({
  email,
  setEmail,
  error,
  setError,
  setUserInfo,
  setVisible,
}) {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email address is required...")
      .email("Invalid email"),
  });

  const handleSearch = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}/users/findUser`, { email });
      setUserInfo(data);
      console.log(data);
      setVisible(1);
      setError("");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <React.Fragment>
      <div className="reset_form">
        <div className="reset_form_header">Find Your Account</div>
        <div className="reset_form_text">
          Please Enter Your Email or Phone Number to search for your account.
        </div>
        <Formik
          initialValues={{
            email,
          }}
          validationSchema={validationSchema}
          onSubmit={() => handleSearch()}
          enableReinitialize
        >
          {(formik) => (
            <Form>
              <LoginInput
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Please enter your email address..."
              />
              {error && <div className="error_text">{error}</div>}
              <div className="reset_form_btns">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                  className="gray-btn"
                >
                  Cancel
                </Link>
                <button type="submit" className="blue-btn">
                  Search
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
}

export default SearchAccount;
