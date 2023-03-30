import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineRight } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";

import useClickOutside from "../../../Helpers/ClickOutside";
import SettingsPrivacy from "./SettingsPrivacy";
import HelpSupport from "./HelpSupport";
import DisplayAccessibility from "./DisplayAccessibility";

function UserMenu({ user, setShowUserMenu }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visibility, setVisibility] = React.useState(0);

  const userMenu = React.useRef(null);

  useClickOutside(userMenu, () => {
    setShowUserMenu(false);
  });

  function logoutUser() {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  }

  return (
    <React.Fragment>
      <div className="menu" ref={userMenu}>
        {visibility === 0 && (
          <>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/profile"
              className="menu_header hover1"
            >
              <img src={user?.picture} alt="profile" />
              <div className="menu_col">
                <span>
                  {user?.firstName} {user?.lastName}
                </span>
                <span>see your Profile</span>
              </div>
            </Link>
            <div className="menu_splitter"></div>
            <div className="menu_main hover3">
              <div className="small_circle">
                <BsFillExclamationSquareFill />
              </div>
              <div className="menu_col">
                <div className="menu_span">Give Feedback</div>
                <div className="menu_span">Help Us Improve</div>
              </div>
            </div>
            <div className="menu_item hover3" onClick={() => setVisibility(1)}>
              <div className="small_circle">
                <AiFillSetting style={{ fontSize: "25px" }} />
              </div>
              <span>settings & privacy</span>
              <div className="rArrow">
                <AiOutlineRight />
              </div>
            </div>
            <div className="menu_item hover3" onClick={() => setVisibility(2)}>
              <div className="small_circle">
                <BiHelpCircle style={{ fontSize: "25px" }} />
              </div>
              <span>Help & support</span>
              <div className="rArrow">
                <AiOutlineRight />
              </div>
            </div>
            <div className="menu_item hover3" onClick={() => setVisibility(3)}>
              <div className="small_circle">
                <BsFillMoonFill style={{ fontSize: "25px" }} />
              </div>
              <span>Display & Accessibility</span>
              <div className="rArrow">
                <AiOutlineRight />
              </div>
            </div>
            <div className="menu_item hover3" onClick={logoutUser}>
              <div className="small_circle">
                <HiLogout style={{ fontSize: "25px" }} />
              </div>
              <span>Logout</span>
            </div>
          </>
        )}
        {visibility === 1 && <SettingsPrivacy setVisibility={setVisibility} />}
        {visibility === 2 && <HelpSupport setVisibility={setVisibility} />}
        {visibility === 3 && (
          <DisplayAccessibility setVisibility={setVisibility} />
        )}
      </div>
    </React.Fragment>
  );
}

export default UserMenu;
