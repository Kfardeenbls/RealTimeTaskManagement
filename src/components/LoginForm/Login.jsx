import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom/dist";
import LoginContext from "../../context/LoginContext";

const LoginForm = () => {
  const { login } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [valid, setValid] = useState(false);
  const [disable, setDisable] = useState(false);

  // Handle form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(disable);
    console.log("login");

    // if (validateFields()) {
    //   setDisable(!disable);
    //   console.log("Login");
    //   login();
    // } else {
    //   setValid(true);
    // }
  };

  // const validateFields = () => {
  //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   const passwordRegex =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //   if (emailRegex.test(username) && passwordRegex.test(password)) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // required
            className="input"
          />
        </div>

        <div className="form-group">
          <label className="label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
            className="input"
          />
        </div>

        {/* {valid && (
          <div className="error-message">
            Invalid username or password. Please check the entered fields.
          </div>
        )} */}

        <button
          type="submit"
          className="button"
          disabled={disable}
          onClick={() => login()}
        >
          Login
        </button>

        <div>
          <Link to="/" className="animated-link">
            Forgot Password
          </Link>
        </div>

        <div>
          <span>Don't have an account? </span>
          <Link to="/SignupForm" className="animated-link">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
