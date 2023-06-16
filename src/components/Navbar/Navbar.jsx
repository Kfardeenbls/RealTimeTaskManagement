import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginContext from "../../context/LoginContext";

const Navbar = () => {
  const { isLogin, logout } = useContext(LoginContext);

  // console.log(isLogin);
  return (
    <div className="navbar">
      <div className="left-element">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about_Us">About Us</Link>
          </li>
          <li>
            <Link to="/contact_Us">Contact Us</Link>
          </li>
          {isLogin && (
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="Right-element">
        {!isLogin && (
          <ul>
            <li>
              <Link to="/SignupForm">Sign Up</Link>
            </li>
            <li>
              <Link to="/LoginForm">Log In</Link>
            </li>
          </ul>
        )}
        {isLogin && (
          <ul>
            <li>
              <Link to="/" onClick={logout}>
                Log Out
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <AccountCircleIcon />
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
