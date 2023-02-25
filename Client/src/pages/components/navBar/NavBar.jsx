import React from "react";
import "./navBar.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Email, GridView, NotificationsOutlined } from "@mui/icons-material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>FriendsBook</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Link to="/:id/Game Profile" style={{ textDecoration: "none" }}>
          <CurrencyExchangeIcon />
        </Link>
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src="https://i.imgur.com/pdRqH3S_d.webp?maxwidth=520&shape=thumb&fidelity=high"
            alt=""
          />
          <span>Leon</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
