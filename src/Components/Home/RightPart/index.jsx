import React from "react";
import { MdMeetingRoom, MdSearch } from "react-icons/md";
import { BiDotsHorizontal } from "react-icons/bi";

import "./styles.css";
import Contact from "./Contact";

const RightPart = ({ user }) => {
  return (
    <React.Fragment>
      <div className="right_home">
        <div className="heading">Sponsored</div>
        <div className="splitter"></div>
        <div className="contacts_wrap">
          <div className="contacts_header">
            <div className="contacts_header_left">Contacts</div>
            <div className="contacts_header_right">
              <div className="contact_circle">
                <MdMeetingRoom />
              </div>
              <div className="contact_circle">
                <MdSearch />
              </div>
              <div className="contact_circle">
                <BiDotsHorizontal />
              </div>
            </div>
          </div>
          <div className="contacts_list">
            <Contact user={user} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightPart;
