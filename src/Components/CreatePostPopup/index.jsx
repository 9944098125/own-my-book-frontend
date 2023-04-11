import React from "react";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";

import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";
import AddToYourPost from "./AddToYourPost";
import "./styles.css";
import ImagePreview from "./ImagePreview";

export default function CreatePostPopup({ user, setShowCreatePost }) {
  const [text, setText] = React.useState();
  const [showPreview, setShowPreview] = React.useState(true);

  const [images, setImages] = React.useState([]);

  const textRef = React.useRef(null);

  return (
    <React.Fragment>
      <div className="blur">
        <div className="postBox">
          <div className="box_header">
            <div
              onClick={() => setShowCreatePost(false)}
              className="small_circle"
            >
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
          {!showPreview ? (
            <>
              <EmojiPickerBackgrounds
                textRef={textRef}
                text={text}
                setText={setText}
              />
            </>
          ) : (
            <ImagePreview
              textRef={textRef}
              text={text}
              setText={setText}
              user={user}
            />
          )}
          <AddToYourPost />
          <button className="post_submit">Post</button>
        </div>
      </div>
    </React.Fragment>
  );
}
