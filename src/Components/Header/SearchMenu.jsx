import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import useClickOutside from "../../Helpers/ClickOutside";

import "./styles.css";

function SearchMenu({ setShowSearchMenu }) {
  const [showIcon, setShowIcon] = React.useState(true);
  const menu = React.useRef(null);
  const input = React.useRef(null);

  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });

  React.useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <React.Fragment>
      <div className="header-left search-area scrollbar" ref={menu}>
        <div className="search-wrap">
          <div className="header-logo">
            <div
              className="circle hover1"
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "50%",
                padding: "5px",
              }}
              onClick={() => setShowSearchMenu(false)}
            >
              <BiArrowBack
                style={{ height: "25px", width: "35px", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="search" onClick={() => input.current.focus()}>
            {showIcon && (
              <div>
                <AiOutlineSearch />
              </div>
            )}
            <input
              type="search"
              placeholder="Search My Book"
              ref={input}
              onFocus={() => setShowIcon(false)}
              onBlur={() => setShowIcon(true)}
            />
          </div>
        </div>
        <div className="search-history-header">
          <span>Recent Searches</span>
          <a>Edit</a>
        </div>
        <div className="search-history"></div>
        <div className="search-results"></div>
      </div>
    </React.Fragment>
  );
}

export default SearchMenu;
