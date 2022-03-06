import React, { useContext } from "react";
import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { UserContext } from "./../../../App";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <Link to="/home">
              <img className="logo-img" src="assets/logo.png" alt="" />
            </Link>
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>sujonmadbor8@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="loginBtn">
            <Link to="/login">
              <button>{loggedInUser.email ? "LogOut" : "Login"}</button>
            </Link>
          </div>
          <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
