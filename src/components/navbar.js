
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Logo from "../images/PM-white-small.png";
import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import AuthService from "../services/authService";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Browse from "./Browse";
import AdminAddPet from "./AdminAddPet";
import User from "./User"
import AdminNewsFeed from "./AddNewsFeed";
import NewsFeed from ".//NewsFeed";

const NavBar = () => {

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
    <>
    <Navbar className="navbar navbar-expand navbar-dark bg-dark">
      <Container>
        <Navbar.Brand>
          <Link to ={"/"} className = "navbar-brand"><img className="Logo" src={Logo} alt="PetMate" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          {showAdmin && (
            <>
                <Link to={"/addPet"} className="nav-link">
                  Add Pet
                </Link>

                <Link to={"/addNews"} className="nav-link">
                  Add News Feed
                </Link>
   
            </>
          )}

        {currentUser ? (
          <div className="navbar-nav ml-auto">
              <Link to={"/browse"} className="nav-link">
                Browse
              </Link>

            <Link to={"/news"} className="nav-link">
                News
              </Link>

              <Link to={"/user"} className="nav-link">
                User
              </Link>

              <Link to ={"/"} className="nav-link" onClick={logOut}>
                LogOut
              </Link>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
          </div>
        )}
          </Nav>

           
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
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
     </>
  );
};

export default NavBar;
