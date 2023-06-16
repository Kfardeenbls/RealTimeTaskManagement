import React, { useState } from "react";
import "./SignUp.css";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnVisible, setBtnVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    Validation();
  };
  const Validation = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (emailRegex.test(email)) {
      setBtnVisible(false);
    }
    if (passwordRegex.test(password)) {
      setBtnVisible(false);
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          {!btnVisible ? <p> </p> : ""}
        </div>

        <div className="form-group">
          <label className="label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>

        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
