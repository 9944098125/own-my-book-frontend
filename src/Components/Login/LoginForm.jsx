import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import logo from "../../Assets/Images/myBook.png";
import LoginInput from "../../Components/Inputs/LoginInput";
import { baseUrl } from "../../baseUrl";

function LoginForm({ setVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = initialValues;

  const [error, setError] = React.useState();
  const [success, setSuccess] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues({ ...initialValues, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("Invalid Email..."),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must contain at least 8 characters and in that at least one capital letter and one number and special character must be there..."
      ),
  });

  const loginSubmit = async () => {
    try {
      setLoading(false);
      const { data } = await axios.post(`${baseUrl}/users/login`, {
        email,
        password,
      });
      setError("");
      setSuccess(data.message);
      dispatch({ type: "LOGIN", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      setLoading(false);
      setSuccess("");
      setError(err.response.data.message);
    }
  };

  const submitLoginForm = () => {
    setLoading(true);
    loginSubmit();
  };

  return (
    <Fragment>
      <div className="login-wrap">
        <div className="login-image-container">
          <img src={logo} alt="logo" className="logo" />
          <span>
            myBook helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="form-container">
          <div className="inner-form-container">
            <Formik
              validationSchema={loginValidation}
              enableReinitialize
              initialValues={initialValues}
              onSubmit={(values) => submitLoginForm(values)}
            >
              {(formik) => (
                <Form>
                  <LoginInput
                    placeholder="Email or Phone Number..."
                    name="email"
                    type="text"
                    onChange={handleChange}
                  />
                  <LoginInput
                    placeholder="Enter Your Password"
                    name="password"
                    onChange={handleChange}
                    bottom
                  />
                  <button className="login-btn" type="submit">
                    <ClipLoader loading={loading} color="grey" size={40} />
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            {error && <div className="error-text">{error}</div>}
            <Link
              className="forgot-password"
              to="/reset"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Forgot Password ?
            </Link>
            <div className="sign-splitter"></div>
            <button
              onClick={() => setVisible(true)}
              className="blue-btn open-register"
            >
              Create Account
            </button>
          </div>
          <Link
            className="forgot-password"
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <b>Create an account for </b>celebrity, business or brand.
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginForm;
