import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/authService";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Browse from "./components/Browse";
import AdminAddPet from "./components/AdminAddPet";
import User from "./components/User"
import AdminNewsFeed from "./components/AddNewsFeed";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdmin(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">

        <Link to={"/"} className="navbar-brand">
          petmate
        </Link>

        <div className="navbar-nav mr-auto">
          {showAdmin && (
            <>
              <li className="nav-item">
                <Link to={"/addPet"} className="nav-link">
                  Add Pet
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addNews"} className="nav-link">
                  Add News Feed
                </Link>
              </li>
            </>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/browse"} className="nav-link">
                Browse
              </Link>
            </li>
            <li className="nav-item">
              <a href="/news" className="nav-link">
                News
              </a>
            </li>
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/browse" component={Browse} />
        <Route path="/addPet" component={AdminAddPet} />
        <Route path="/user" component={User} />
        <Route path="/addNews" component={AdminNewsFeed} />
        <Route path="/news" component={NewsFeed} />
      </Switch>
      
    </div>
  );
};

export default App