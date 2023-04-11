import React from "react";

import "./styles.css";
import EmojiPickerBackgrounds from "./EmojiPickerBackgrounds";

function ImagePreview({ textRef, text, setText, user }) {
  return (
    <React.Fragment>
      <div className="overflow_a">
        <EmojiPickerBackgrounds
          textRef={textRef}
          text={text}
          setText={setText}
          user={user}
        />
      </div>
    </React.Fragment>
  );
}

export default ImagePreview;
