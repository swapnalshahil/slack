import React from "react";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import './Header.css';


function Header() {
  return (
    <div className="header">
        <div className="header_left">
            {/* avatar */}
            <Avatar
                className="header_avatar"
                // alt = {user?.name}
                // src = {user?.photoURL}
             />
            {/* time icon */}
            <AccessTimeIcon />
        </div>
        <div className="header_search">
            {/* search icon */}
            <SearchIcon />
            {/* input */}
            <input placeholder="Search eulersgamma" />
        </div>
        <div className="header_right">
            {/* help icon */}
            <HelpOutlineIcon />
        </div>
    </div>
  )
}

export default Header;
