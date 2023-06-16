// TaskForm.js
import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      deadline,
    };
    onSubmit(newTask);
    setTitle("");
    setDescription("");
    setDeadline("");
  };

  return (
    <div className="task-form">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>

        <div className="button-container">
          <button type="submit">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
