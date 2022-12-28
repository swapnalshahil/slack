import React, { useEffect, useState } from 'react'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from "@mui/icons-material/InsertComment";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import './Sidebar.css'
import db from '../firebase';
import SidebarOption from './SidebarOption';
import { useStateValue } from '../StateProvider';

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{user}] = useStateValue();
  
  useEffect(() => {
    db.collection("rooms").onSnapshot( (snapshot) => (
      setChannels(snapshot.docs.map((doc) => ({
        id : doc.id,
        name: doc.data().name,
      })))
    ))
  }, []);
  // console.log(channels)
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Sidebar</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mention & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {/* connect db  */}
    
      {channels.map((channel) => (
        <SidebarOption key = {channel.id} title={channel.name} id = {channel.id}/>
      ))}
    </div>
  );
}

export default Sidebar