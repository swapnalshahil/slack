import React from "react";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import './Header.css';
import { useStateValue } from "../StateProvider";


function Header() {
  const [{ user }] = useStateValue();
//   console.log(user)
  return (
    <div className="header">
        <div className="header_left">
            {/* avatar */}
            <Avatar
                className="header_avatar"
                alt = {user?.displayName}
                src = {user?.photoURL}
             />
            {/* time icon */}
            <AccessTimeIcon />
        </div>
        <div className="header_search">
            {/* search icon */}
            <input placeholder="Search eulersgamma" />
            <SearchIcon />
            {/* input */}
        </div>
        <div className="header_right">
            {/* help icon */}
            <HelpOutlineIcon />
        </div>
    </div>
  )
}

export default Header;
