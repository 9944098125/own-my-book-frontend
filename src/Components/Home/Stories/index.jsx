import React from "react";
import { AiOutlinePlusCircle, AiOutlineArrowRight } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import { stories } from "../../../Data/Home";
import Story from "./Story";
import "./styles.css";

export default function Stories() {
  const query1175px = useMediaQuery({
    query: "(max-width:1176px)",
  });

  const query1030px = useMediaQuery({
    query: "(max-width:1030px)",
  });

  const query960px = useMediaQuery({
    query: "(max-width:960px)",
  });

  const query885px = useMediaQuery({
    query: "(max-width:885px)",
  });

  const query805px = useMediaQuery({
    query: "(max-width:805px)",
  });

  const query520px = useMediaQuery({
    query: "(max-width:520px)",
  });

  const max = query520px
    ? 3
    : query805px
    ? 4
    : query885px
    ? 5
    : query960px
    ? 3
    : query1030px
    ? 5
    : query1175px
    ? 4
    : stories.length;
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
        {stories.slice(0, max).map((story, idx) => (
          <Story key={idx} story={story} />
        ))}
        <div className="white_circle">
          <AiOutlineArrowRight />
        </div>
      </div>
    </React.Fragment>
  );
}
