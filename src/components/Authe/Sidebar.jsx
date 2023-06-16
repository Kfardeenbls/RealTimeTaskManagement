import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Task List");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Task Dashboard</h2>
      </div>
      <ul className="sidebar-nav">
        <li
          className={`sidebar-item ${
            activeTab === "Task-List" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Task List")}
        >
          <Link to="/Task/Task-List">Task List</Link>
        </li>
        <li
          className={`sidebar-item ${
            activeTab === "Task Form" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Task Form")}
        >
          <Link to="/Task/Task-Form">Task Form</Link>
        </li>
        <li
          className={`sidebar-item ${
            activeTab === "Task Details" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Task Details")}
        >
          <Link to="/Task/Task-Details">Task Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
