import React from 'react'

import './SidebarOption.css';
import db from '../firebase';
import { useNavigate } from "react-router-dom";


function SidebarOption({ Icon, title, id, addChannelOption }) {
  // let history = useHistory();
  const history = useNavigate();

  const selectChannel = () => {
    if (id) {
      // console.log(id);
      history(`/room/${id}`);
    } else {
      history( title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please Enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  }
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption