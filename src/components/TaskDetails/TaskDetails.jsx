// TaskDetails.js
import React from "react";
import "./TaskDetails.css";

const TaskDetails = () => {
  const task = {
    title: "title",
    description: "description",
    deadline: "deadline",
    status: "status",
  };
  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <h3>Title: {task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Status: {task.status}</p>
      <div className="actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TaskDetails;
