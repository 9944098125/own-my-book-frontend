import React from "react";
import { FcImageFile } from "react-icons/fc";
import { AiFillTag } from "react-icons/ai";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { GiMicrophone } from "react-icons/gi";
import { BiDotsHorizontal } from "react-icons/bi";

import "./styles.css";

function AddToYourPost() {
  return (
    <React.Fragment>
      <div className="addToYourPost">
        <div className="addTo_text">Add to Your Post</div>
        <div className="post_header_right hover1">
          <FcImageFile style={{ fontSize: "20px", cursor: "pointer" }} />
        </div>
        <div className="post_header_right hover1">
          <AiFillTag
            color="blue"
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        </div>
        <div className="post_header_right hover1">
          <BsFillEmojiSunglassesFill
            color="red"
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        </div>
        <div className="post_header_right hover1">
          <SiGooglemaps
            color="green"
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        </div>
        <div className="post_header_right hover1">
          <GiMicrophone
            color="violet"
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        </div>
        <div className="post_header_right hover1">
          <BiDotsHorizontal
            color="grey"
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddToYourPost;
