import { useState } from "react";

import { BsSpeedometer2 } from "react-icons/bs";
import { BiCalendarCheck } from "react-icons/bi";
import { HiOutlineEye } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { MdVideocam } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { GoGear } from "react-icons/go";

import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/navIcon.png";
import { currentUserDetail } from "../../../data/data";
import {
  StNavBarContainer,
  StNavBarLinksContainer,
  StNavBarLinksItem,
  StNavBarUserSetting,
} from "./style";

const NAV_LINKS = [
  { path: "/speed", icon: <BsSpeedometer2 /> },
  { path: "/check", icon: <BiCalendarCheck /> },
  { path: "/watch", icon: <HiOutlineEye /> },
  { path: "/people", icon: <IoIosPeople /> },
  { path: "/statistics", icon: <FiBarChart2 /> },
  { path: "/", icon: <MdVideocam /> },
];

const NavBar = () => {
  const [isUserSettingOpen, setIsUserSettingOpen] = useState(false);
  const loggingOutHandler = () => {
    localStorage.removeItem("user");
    window.location.reload(false);
  };

  return (
    <StNavBarContainer>
      <Link to="/">
        <img src={Logo} alt="video-call" />
      </Link>
      <StNavBarLinksContainer>
        {NAV_LINKS.map(({ icon, path }, index) => (
          <StNavBarLinksItem key={index}>
            <NavLink
              to={path}
              className={(link) => (link.isActive ? "active" : null)}
            >
              {icon}
            </NavLink>
          </StNavBarLinksItem>
        ))}
      </StNavBarLinksContainer>
      <span />

      <StNavBarUserSetting
        isUserSettingOpen={isUserSettingOpen}
        onClick={() => setIsUserSettingOpen(!isUserSettingOpen)}
      >
        <Link to="/setting">
          <GoGear />
        </Link>
        <button onClick={loggingOutHandler}>
          <AiOutlinePoweroff />
        </button>
        <img src={currentUserDetail.userAvatar} alt="user" />
      </StNavBarUserSetting>
    </StNavBarContainer>
  );
};

export default NavBar;
