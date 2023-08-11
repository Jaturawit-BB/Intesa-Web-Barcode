import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SlideBar";
import "../../App.css";
import { IconContext } from "react-icons";
import IntesaLogo from "../../Icon/IntesaLogo.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  // const [currentMenu, setCurrentMenu] = useState("Home"); // Add a state variable to store the current menu name

  const showSidebar = () => setSidebar(!sidebar);

  // const handleMenuItemClick = (title) => {
  //   setCurrentMenu(title); 
  //   showSidebar(); 
  // };

  return (
    <>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className={sidebar ? "menu-bars active" : "menu-bars"}>
            <FaIcons.FaBars onClick={showSidebar} />
            <img src={IntesaLogo} alt="" style={{ width: 250, height: 80 }} />
          </Link>
          {/* <div className="menu-name">
            <img src={IntesaLogo} alt="" />
          </div>{" "} */}
          {/* Display the current menu name */}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    to={item.path}
                    // onClick={() => handleMenuItemClick(item.title)}
                  >
                    {" "}
                    {/* Call handleMenuItemClick when a menu item is clicked */}
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
