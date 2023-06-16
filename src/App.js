import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm/Login";
import SignupForm from "./components/SignupForm/Signup";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskDetails from "./components/TaskDetails/TaskDetails";
// import TaskItem from "./components/TaskItem/TaskItem";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Profile from "./components/profile/Profile";
import AuthRequired from "./context/AuthRequired";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginContext, { AuthContextProvider } from "./context/LoginContext";
import Sidebar from "./components/Authe/Sidebar";
import { useContext } from "react";

const App = () => {
  const { islogin } = useContext(LoginContext);
  return (
    <Router>
      <AuthContextProvider>
        <Navbar />
        {islogin ? <Sidebar /> : ""}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="About_Us" element={<AboutUs />} />
          <Route path="Contact_Us" element={<ContactUs />} />
          <Route path="LoginForm" element={<LoginForm />} />
          <Route path="SignupForm" element={<SignupForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Task/Task-List" element={<TaskList />} />
          <Route path="Task/Task-Details" element={<TaskDetails />} />
          <Route path="Task/Task-Form" element={<TaskForm />} />
          <Route path="Dashboard" element={<Dashboard />} />

          <Route
            path="Task"
            element={
              <AuthRequired>
                <Dashboard />
              </AuthRequired>
            }
          >
            {/* <Route index element={<Navigate to="Task-List" />} />
            <Route path="Task-List" element={<TaskList />} />
            <Route path="TaskForm" element={<TaskForm />} />
            <Route path="TaskDetails" element={<TaskDetails />} /> */}
          </Route>
        </Routes>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
