import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import useClickOutside from "../../Helpers/ClickOutside";
import { create, menu } from "../../Data/AllMenu";
import AllMenuItem from "./AllMenuItem";

import "./styles.css";

function AllMenu({ setShowAllMenu }) {
  const allMenu = React.useRef(null);

  useClickOutside(allMenu, () => {
    setShowAllMenu(false);
  });
  return (
    <React.Fragment>
      <div className="all_menu" ref={allMenu}>
        <div className="all_menu_header">Menu</div>
        <div className="all_menu_wrap scrollbar">
          <div className="all_left">
            <div className="all_menu_search">
              <AiOutlineSearch />
              <input type="search" placeholder="Search Menu" />
            </div>
            <div className="all_menu_group">
              <div className="all_menu_group_header">Social</div>
              {menu.slice(0, 6).map((item, i) => (
                <AllMenuItem
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
            <div className="all_menu_group">
              <div className="all_menu_group_header">Entertainment</div>
              {menu.slice(6, 9).map((item, i) => (
                <AllMenuItem
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
            <div className="all_menu_group">
              <div className="all_menu_group_header">Shopping</div>
              {menu.slice(9, 11).map((item, i) => (
                <AllMenuItem
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
            <div className="all_menu_group">
              <div className="all_menu_group_header">Personal</div>
              {menu.slice(11, 15).map((item, i) => (
                <AllMenuItem
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
            <div className="all_menu_group">
              <div className="all_menu_group_header">Professional</div>
              {menu.slice(15, 17).map((item, i) => (
                <AllMenuItem
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
            <div className="all_menu_group">
              <div className="all_menu_group_header">Community Resources</div>
              {menu.slice(17, 21).map((item, i) => (
                <AllMenuItem
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
            <div className="all_menu_group">
              <div className="all_menu_group_header">More from META</div>
              {menu.slice(21, 23).map((item, i) => (
                <AllMenuItem
                  key={i}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className="all_right">
            <div className="all_right_header">Create</div>
            {create.map((item, idx) => (
              <div className="all_right_item hover1" key={idx}>
                <div className="all_right_circle">
                  <img src={item.icon} alt="" className="all_menu_img" />
                </div>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AllMenu;
