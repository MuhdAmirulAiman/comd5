import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.modules.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { IconContext } from "react-icons";
import { FaBars, FaAngleDoubleLeft } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import {
  MdOutlineGraphicEq,
  MdOutlineAutoGraph,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";

export const SideBar = ({ toggled, handleToggleSidebar }) => {
  const [toggleCollapse, setTogglerCollapse] = useState(true);

  const handleHover = () => {
    setTogglerCollapse(!toggleCollapse);
  };

  return (
    <ProSidebar
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
      toggled={toggled}
      collapsed={toggled ? false : toggleCollapse}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className="logotext">
          {/* small and big change using menucollapse state */}
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <p>
              {toggleCollapse ? (
                <FaBars className="m-auto" />
              ) : (
                <FaAngleDoubleLeft className="m-auto" />
              )}
            </p>
          </IconContext.Provider>
        </div>
      </SidebarHeader>
      <hr className="border-[#2d95d1] border-2" />
      <IconContext.Provider value={{ color: "white", size: "3em" }}>
        <SidebarContent>
          <Menu>
            <MenuItem
              icon={<MdOutlineGraphicEq />}
              suffix={<span className="badge red">Test</span>}
              active={true}
              className="mt-[0.325rem] mb-3"
            >
              Dashboard
              <NavLink to={"/"}></NavLink>
            </MenuItem>
            <hr className="border-[#2d95d1] border-2" />
            <MenuItem icon={<MdOutlineAutoGraph />} className="my-3.5">
              Trade<NavLink to={"/register"}></NavLink>
            </MenuItem>
            <hr className="border-[#2d95d1] border-2" />
            <MenuItem icon={<FiArchive />} className="my-3.5">
              History<NavLink to={"/register"}></NavLink>
            </MenuItem>
            <hr className="border-[#2d95d1] border-2" />
            <MenuItem
              icon={<MdOutlineAccountBalanceWallet />}
              className="my-3.5"
            >
              Wallet<NavLink to={"/register"}></NavLink>
            </MenuItem>
            <hr className="border-[#2d95d1] border-2" />
          </Menu>
          {/* <Menu iconShape="circle"></Menu> */}
        </SidebarContent>
      </IconContext.Provider>
      {/* <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="#"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            Bruh <FaGithub />
          </a>
        </div>
      </SidebarFooter> */}
    </ProSidebar>
  );
};