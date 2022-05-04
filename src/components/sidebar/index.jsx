import React from 'react';
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"
// import LogoS from "../../assets/image/logotext.png"

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
      <Link to= '/'>
        <img src={Logo} alt="logo" className="logo" />
        {/* <img
          src={LogoS}
          alt="logotext"
          className="logotext"
        /> */}
        </Link>
      </div>

      <div className="pages">
      <NavLink exact='true' activeclassname='active' to='/'>
        <FontAwesomeIcon id="home" icon={faHome} color="#4d4d4e" />
      </NavLink>
        <NavLink exact='true' to='/about'>
        <FontAwesomeIcon id="about" icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' to='/contact'>
        <FontAwesomeIcon id="contact" icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </div>

      <div className="links">
        <a href="https://www.linkedin.com/in/anshss/" target="_blank">
          <FontAwesomeIcon id="linkedin" icon={faLinkedin} color="#4d4d4e" />
        </a>

        <a href="https://github.com/anshss" target="_blank">
          <FontAwesomeIcon id="github" icon={faGithub} color="#4d4d4e" />
        </a>
      </div>
    </div>
  );
};

export default sidebar;
