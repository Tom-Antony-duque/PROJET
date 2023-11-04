import React from "react";
import "./topbar.css";
import {NotificationsNone, Language, Settings} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">TTouTT Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/343690566_673797771222109_1312896946334255028_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iRi12IlA1QIAX8FRMP2&_nc_ht=scontent.ftun8-1.fna&oh=00_AfDM-0olRWg5m9ZOcEyaeQZ13we1mIf5OXmV5HfGnZEbXg&oe=6545083E" alt="" className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}
