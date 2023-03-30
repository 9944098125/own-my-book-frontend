import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../../Components/Login/Footer";
import LoginForm from "../../Components/Login/LoginForm";
import RegisterForm from "../../Components/Login/RegisterForm";

import "./styles.css";

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);
  return (
    <Fragment>
      <div className="login">
        <div className="login-wrapper">
          <LoginForm setVisible={setVisible} />
          {visible && <RegisterForm setVisible={setVisible} />}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
