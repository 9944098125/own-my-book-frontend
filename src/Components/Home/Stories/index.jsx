import React from "react";
import { AiOutlinePlusCircle, AiOutlineArrowRight } from "react-icons/ai";

import { stories } from "../../../Data/Home";
import Story from "./Story";
import "./styles.css";

export default function Stories() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <React.Fragment>
      <div className="stories">
        <div className="create_story_card">
          <img src={user?.picture} alt="" className="create_story_img" />
          <div className="plus_story">
            <AiOutlinePlusCircle style={{ fontSize: "35px", color: "white" }} />
          </div>
          <div className="story_create_text">Create Story</div>
        </div>
        {stories.map((story, idx) => (
          <Story key={idx} story={story} />
        ))}
        <div className="white_circle">
          <AiOutlineArrowRight />
        </div>
      </div>
    </React.Fragment>
  );
}
