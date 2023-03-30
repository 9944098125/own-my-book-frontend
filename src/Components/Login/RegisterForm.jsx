import { Formik, Form } from "formik";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import RegisterInput from "../Inputs/RegisterInput";
import DOBSelect from "./DOBSelect";
import GenderSelect from "./GenderSelect";
import { baseUrl } from "../../baseUrl";

import "./styles.css";

function RegisterForm({ setVisible }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDate(),
    gender: "",
  };
  const [initialValues, setInitialValues] = React.useState(userInfo);

  const { bDay, bMonth, bYear, gender, firstName, lastName, email, password } =
    initialValues;
  const changeRegisterInputs = (e) => {
    const { name, value } = e.target;
    setInitialValues({ ...initialValues, [name]: value });
  };

  const getDays = () => {
    return new Date(bYear, bMonth, 0).getDate();
  };

  const temporaryYear = new Date().getFullYear();

  const years = Array.from(new Array(100), (value, idx) => temporaryYear - idx);

  const months = Array.from(new Array(12), (value, idx) => 1 + idx);

  const days = Array.from(new Array(getDays()), (value, idx) => 1 + idx);
  // console.log(bYear, bMonth, bDay);

  const [dateError, setDateError] = React.useState("");

  const [genderError, setGenderError] = React.useState("");

  const [error, setError] = React.useState();
  const [success, setSuccess] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const validationSchema = new Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must contain at least 8 characters and in that at least one capital letter and one number and special character must be there..."
      ),
  });

  const registerSubmit = async () => {
    try {
      setLoading(false);
      const { data } = await axios.post(`${baseUrl}/users/register`, {
        firstName,
        lastName,
        email,
        password,
        bYear,
        bMonth,
        bDay,
        gender,
      });
      setError("");
      setSuccess(data.message);
      const { message, ...rest } = data;
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: rest });
        localStorage.setItem("user", JSON.stringify(rest));
        navigate("/");
      }, 2000);
    } catch (err) {
      setLoading(false);
      setSuccess("");
      setError(err.response.data.message);
    }
  };

  const submitRegisterForm = (values) => {
    setLoading(true);
    const currentDate = new Date();
    const pickedDate = new Date(bYear, bMonth - 1, bDay);
    const atleast14 = new Date(1970 + 14, 0, 1);
    const noMoreThan70 = new Date(1970 + 70, 0, 1);
    if (currentDate - pickedDate < atleast14) {
      setDateError(
        "it looks like you've entered the wrong info.Please make sure that you use your real date of birth."
      );
    } else if (currentDate - pickedDate > noMoreThan70) {
      setDateError(
        "it looks like you've entered the wrong info.Please make sure that you use your real date of birth."
      );
    } else if (gender === "") {
      setDateError("");
      setGenderError(
        "Please choose a gender. You can change who can see this later."
      );
    } else {
      setDateError("");
      setGenderError("");
      registerSubmit();
    }
  };

  return (
    <div className="blur">
      <div className="register">
        <div className="register-header">
          <AiOutlineClose
            onClick={() => setVisible(false)}
            className="close-icon"
          />
          <span>Sign Up</span>
          <span>It's quick and easy</span>
        </div>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => submitRegisterForm(values)}
        >
          {(formik) => (
            <Form className="register-form">
              <div className="register-line">
                <RegisterInput
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={changeRegisterInputs}
                />

                <RegisterInput
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={changeRegisterInputs}
                />
              </div>
              <div className="register-line">
                <RegisterInput
                  type="text"
                  placeholder="Enter Your Email address..."
                  name="email"
                  onChange={changeRegisterInputs}
                />
              </div>
              <div className="register-line">
                <RegisterInput
                  placeholder="Enter Your New Password"
                  name="password"
                  onChange={changeRegisterInputs}
                />
              </div>
              <div className="register-col">
                <DOBSelect
                  bYear={bYear}
                  bMonth={bMonth}
                  bDay={bDay}
                  days={days}
                  months={months}
                  years={years}
                  dateError={dateError}
                  changeRegisterInputs={changeRegisterInputs}
                />
              </div>
              <div className="register-col">
                <GenderSelect
                  changeRegisterInputs={changeRegisterInputs}
                  genderError={genderError}
                />
                <div className="reg_btn_wrapper">
                  <button type="submit" className="blue-btn open-register">
                    <ClipLoader color="#1876f2" loading={loading} size={40} />
                    Sign Up
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterForm;
