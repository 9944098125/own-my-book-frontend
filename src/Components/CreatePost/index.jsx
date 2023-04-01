import React from "react";
import { SiFacebooklive } from "react-icons/si";
import { MdOutlineMonochromePhotos } from "react-icons/md";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

import "./styles.css";

export default function CreatePost({ user }) {
  return (
    <React.Fragment>
      <div className="createPost">
        <div className="createPost_header">
          <img src={user?.picture} alt="" />
          <div className="open_post">
            What's on your mind, {user?.firstName} ?
          </div>
        </div>
        <div className="create_splitter"></div>
        <div className="createPost_body">
          <div className="createPost_icon hover1">
            <SiFacebooklive style={{ color: "red", fontSize: "30px" }} />
            Live Videos
          </div>

          <div className="createPost_icon hover1">
            <MdOutlineMonochromePhotos
              style={{ color: "green", fontSize: "20px" }}
            />
            Photo / Video
          </div>

          <div className="createPost_icon hover1">
            <BsFillEmojiSunglassesFill
              style={{ color: "blue", fontSize: "20px" }}
            />
            Feeling / Activity
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
