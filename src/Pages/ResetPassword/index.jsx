import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";

import logo from "../../Assets/Images/M.png";
import LoginInput from "../../Components/Inputs/LoginInput";
import "./styles.css";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import CodeVerification from "./CodeVerification";
import ChangePassword from "./ChangePassword";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function logoutUser() {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }

  const [userInfo, setUserInfo] = React.useState();

  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [error, setError] = React.useState("");

  const [visible, setVisible] = React.useState(0);

  return (
    <React.Fragment>
      <div className="reset">
        <div className="reset_header">
          <img src={logo} alt="" />
          {user ? (
            <div className="right_reset">
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={
                    user.picture
                      ? user.picture
                      : "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                  }
                  alt=""
                />
              </Link>
              <button className="blue-btn" onClick={logoutUser}>
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="right_reset">
                <button className="blue-btn">Login</button>
              </div>
            </Link>
          )}
        </div>
        <div className="reset_wrap">
          {visible === 0 && (
            <SearchAccount
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              email={email}
              setEmail={setEmail}
              error={error}
              setError={setError}
              setVisible={setVisible}
            />
          )}
          {visible === 1 && (
            <SendEmail
              email={email}
              setError={setError}
              userInfo={userInfo}
              user={user}
              error={error}
              setVisible={setVisible}
            />
          )}
          {visible === 2 && (
            <CodeVerification code={code} setCode={setCode} error={error} />
          )}
          {visible === 3 && (
            <ChangePassword
              password={password}
              confirmPassword={confirmPassword}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              error={error}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
