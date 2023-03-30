import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { GoTriangleUp } from "react-icons/go";

import LeftLinks from "./LeftLinks";
import { left } from "../../../Data/Home";
import "./styles.css";
import Shortcuts from "./Shortcuts";

const LeftPart = ({ user }) => {
  const [moreItemsVisible, setMoreItemsVisible] = React.useState(false);

  return (
    <React.Fragment>
      <div className="left_home scrollbar">
        <Link
          to="/profile"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="left_link hover1">
            <img src={user?.picture} alt="" />
            <span>
              {user?.firstName} {user?.lastName}
            </span>
          </div>
        </Link>
        {left.slice(0, 2).map((link, idx) => (
          <LeftLinks
            key={idx}
            img={link.img}
            text={link.text}
            notification={link.notification}
          />
        ))}
        {!moreItemsVisible && (
          <div
            className="left_link hover1"
            onClick={() => setMoreItemsVisible(true)}
          >
            <div className="small_circle">
              <AiFillCaretDown />
            </div>
            <span>See More</span>
          </div>
        )}
        {moreItemsVisible && (
          <div className="more_left">
            {left.slice(2, left.length).map((link, idx) => (
              <LeftLinks
                key={idx}
                img={link.img}
                text={link.text}
                notification={link.notification}
              />
            ))}
            <div
              className="left_link hover1"
              onClick={() => setMoreItemsVisible(false)}
            >
              <div className="small_circle">
                <GoTriangleUp />
              </div>
              <span>See Less</span>
            </div>
          </div>
        )}
        <div className="splitter"></div>
        <div className="shortcut">
          <div className="heading">Your Shortcuts</div>
          <div className="edit_shortcut">Edit</div>
        </div>
        <div className="shortcut_list">
          <Shortcuts
            link="https://www.youtube.com/feed/library"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
            name="Open Youtube"
          />

          <Shortcuts
            link="https://www.instagram.com/"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            name="Open Instagram"
          />
        </div>
        <div
          className={`mb_copyright ${
            moreItemsVisible && "relative_mb_copyright"
          }`}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Privacy{" "}
          </Link>
          <span>. </span>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Terms{" "}
          </Link>
          <span>. </span>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Advertising{" "}
          </Link>
          <span>. </span>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Ad Choices <i className="ad_choices_icon"></i>{" "}
          </Link>
          <span>. </span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          ></Link>
          Cookies <span>. </span>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            More{" "}
          </Link>
          <span>. </span> <br />
          Meta © 2022
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftPart;
