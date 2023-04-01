import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import CreatePost from "../../Components/CreatePost";
import LeftPart from "../../Components/Home/LeftPart";
import RightPart from "../../Components/Home/RightPart";
import Stories from "../../Components/Home/Stories";
import ActivateForm from "./ActivateForm";
import { baseUrl } from "../../baseUrl";

import "./styles.css";

const Activate = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useParams();

  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${baseUrl}/users/activate/`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
      localStorage.setItem("user", JSON.stringify({ ...user, verified: true }));
      dispatch({
        type: "VERIFY",
        payload: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  React.useEffect(() => {
    activateAccount();
  }, []);

  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("user") === null) {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <div className="home">
        {success ? (
          <ActivateForm
            type="success"
            header="Account Activated Successfully"
            text={success}
            loading={loading}
          />
        ) : (
          <ActivateForm
            type="error"
            header="Account Activation Failed"
            text={error}
            loading={loading}
          />
        )}
        <LeftPart user={user} />
        <div className="home_middle">
          <Stories />
          <CreatePost user={user} />
        </div>
        <RightPart user={user} />
      </div>
    </Fragment>
  );
};

export default Activate;
