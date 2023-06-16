// TaskItem.js
import React from "react";
import "./TaskItem.css";

const TaskItem = () => {
  const task = {
    title: "title",
    description: "description",
    deadline: "deadline",
    status: "status",
  };
  return (
    <div className="task-item">
      <h3 className="title">{task.title}</h3>
      <p>Description: {task.description}</p>
      <p>Deadline: {task.deadline}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskItem;
