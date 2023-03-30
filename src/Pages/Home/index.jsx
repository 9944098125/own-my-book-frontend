import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LeftPart from "../../Components/Home/LeftPart";
import RightPart from "../../Components/Home/RightPart";
import Stories from "../../Components/Home/Stories";

import "./styles.css";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("user") === null) {
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <div className="home">
        <LeftPart user={user} />
        <div className="home_middle">
          <Stories />
        </div>
        <RightPart user={user} />
      </div>
    </Fragment>
  );
};

export default Home;
