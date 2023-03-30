import React from "react";
import { AiOutlineArrowLeft, AiFillSetting } from "react-icons/ai";
import { FcPrivacy } from "react-icons/fc";
import { RiChatPrivateFill } from "react-icons/ri";
import { TbActivity, TbLanguageKatakana } from "react-icons/tb";
import { ImFeed } from "react-icons/im";

import "../styles.css";

function SettingsPrivacy({ setVisibility }) {
  return (
    <React.Fragment>
      <div className="absolute_wrap">
        <div className="absolute_wrap_header">
          <div
            style={{ cursor: "pointer" }}
            className="circle hover1"
            onClick={() => setVisibility(0)}
          >
            <AiOutlineArrowLeft />
          </div>
          Settings & Privacy
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <AiFillSetting />
          </div>
          <span>Settings</span>
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <FcPrivacy />
          </div>
          <span>Privacy Checkup</span>
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <RiChatPrivateFill />
          </div>
          <span>Privacy Shortcuts</span>
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <TbActivity />
          </div>
          <span>Activity Log</span>
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <ImFeed />
          </div>
          <span>New Feed Preferences</span>
        </div>
        <div className="menu_item hover3">
          <div className="small_circle">
            <TbLanguageKatakana />
          </div>
          <span>Language</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SettingsPrivacy;
