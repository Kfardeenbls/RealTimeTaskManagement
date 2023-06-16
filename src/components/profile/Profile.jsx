import React from "react";
import { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-component ${isOpen ? "open" : ""}`}>
      <button className="trigger-button" onClick={toggleOpen}>
        Click Me
      </button>
      <div className="content">Content goes here</div>
    </div>
  );
};
export default Profile;
