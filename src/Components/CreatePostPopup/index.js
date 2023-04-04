import React from "react";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";

import "./styles.css";

export default function CreatePostPopup({ user }) {
  const [text, setText] = React.useState();
  const [showPreview, setShowPreview] = React.useState(false);
  return (
    <React.Fragment>
      <div className="blur">
        <div className="postBox">
          <div className="box_header">
            <div className="small_circle">
              <AiOutlineClose />
            </div>
            <span>Create Post</span>
          </div>
          <div className="box_profile">
            <img src={user?.picture} className="user_img" alt="" />
            <div className="box_col">
              <div className="box_profile_name">
                {user?.firstName} {user?.lastName}
              </div>
              <div className="box_privacy">
                <BsGlobeAmericas />
                <span>Public</span>
                <AiFillCaretDown />
              </div>
            </div>
          </div>
          <div className="flex_center">
            {showPreview && (
              <textarea
                placeholder={`What's on your mind ? ${user?.firstName}`}
                className="post_input"
                maxLength="100"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
