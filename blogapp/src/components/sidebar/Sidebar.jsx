import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About me</span>
        <img
          src="https://images.pexels.com/photos/10506068/pexels-photo-10506068.jpeg?h=400&fit=crop&crop=focalpoint&dpr=2"
          className="sidebarimg"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel
          cumque esse voluptates aliquid expedita maxime provident quo ratione
          sunt, nam unde nulla accusamus excepturi laudantium nisi illo quaerat
          quae!
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Categories</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem">Music</li>
          <li className="sidebarlistitem">Sports</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Movies</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow us</span>
        <div className="sidebarsocial">
          <i className="sidebar-icon fab fa-facebook"></i>
          <i className="sidebar-icon fa-brands fa-square-x-twitter"></i>
          <i className="sidebar-icon fa-solid fa-location-dot"></i>
          <i className="sidebar-icon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
