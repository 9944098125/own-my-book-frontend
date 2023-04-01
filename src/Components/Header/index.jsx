import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiFillHome, AiFillCaretDown } from "react-icons/ai";
import { FaUserFriends, FaStoreAlt, FaFacebookMessenger } from "react-icons/fa";
import { FiYoutube, FiSave } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";

import logo from "../../Assets/Images/M.png";
import SearchMenu from "./SearchMenu";
import AllMenu from "./AllMenu";
import useClickOutside from "../../Helpers/ClickOutside";
import UserMenu from "./UserMenu";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [showSearchMenu, setShowSearchMenu] = React.useState(false);
  const [showAllMenu, setShowAllMenu] = React.useState(false);

  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const allMenu = React.useRef(null);

  useClickOutside(allMenu, () => {
    setShowAllMenu(false);
  });

  const userMenuRef = React.useRef(null);

  useClickOutside(userMenuRef, () => {
    setShowUserMenu(false);
  });

  return (
    <React.Fragment>
      <header>
        <div className="header-left">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={logo} alt="logo" className="header-logo" />
          </Link>
          <div
            className="search search1"
            onClick={() => setShowSearchMenu(true)}
          >
            <AiOutlineSearch className="search-icon" />
            <input
              type="text"
              className="hide-input"
              placeholder="Search MyBook"
            />
          </div>
        </div>
        {showSearchMenu && <SearchMenu setShowSearchMenu={setShowSearchMenu} />}
        <div className="header-middle">
          <Link to="/" className="middle-icon active">
            <AiFillHome
              style={{ color: "var(--color-primary)" }}
              className="header-icons"
            />
          </Link>
          <Link to="/" className="middle-icon hover1">
            <FaUserFriends style={{ color: "grey" }} className="header-icons" />
          </Link>
          <Link to="/" className="middle-icon hover1">
            <FiYoutube style={{ color: "grey" }} className="header-icons" />
            <div className="middle-notification">9+</div>
          </Link>
          <Link to="/" className="middle-icon hover1">
            <FaStoreAlt style={{ color: "grey" }} className="header-icons" />
          </Link>
          <Link to="/" className="middle-icon hover1">
            <FiSave style={{ color: "grey" }} className="header-icons" />
          </Link>
        </div>
        <div className="header-right">
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="/profile"
            className="profile-link hover1"
          >
            <img
              src={user?.picture}
              alt="profile"
              className="profile-picture"
            />
            <span>{user?.firstName}</span>
          </Link>
          <div>
            <div
              className={`circle-icon hover1 ${showAllMenu && "active_header"}`}
              onClick={() => setShowAllMenu((prev) => !prev)}
            >
              <RiDashboardFill className="header-icons" />
            </div>
          </div>
          {showAllMenu && <AllMenu setShowAllMenu={setShowAllMenu} />}
          <div className="circle-icon hover1">
            <FaFacebookMessenger className="header-icons" />
          </div>
          <div className="circle-icon hover1">
            <IoMdNotifications className="header-icons" />
            <div className="right-notification">3</div>
          </div>
          <div>
            <div
              className={`circle-icon hover1 ${
                showUserMenu && "active_header"
              }`}
              onClick={() => setShowUserMenu((prev) => !prev)}
            >
              <AiFillCaretDown className="header-icons" />
            </div>
          </div>
          {showUserMenu && (
            <UserMenu user={user} setShowUserMenu={setShowUserMenu} />
          )}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
