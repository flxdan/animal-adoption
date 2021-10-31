
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Logo from "../images/PM_black-small.png";
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
  // return (
  //   <Navbar bg="light" expand="lg">
  //     <Container>
  //       <Navbar.Brand>
  //         <img className="Logo" src={Logo} alt="PetMate" />
  //       </Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav>
  //           <Nav.Link>News</Nav.Link>
  //           <Nav.Link>Profile</Nav.Link>
  //           <Nav.Link>Logout</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );
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
    <Navbar className="navbar navbar-expand navbar-dark bg-dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link to ={"/"} className = "navbar-brand"><img className="Logo" src={Logo} alt="PetMate" /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
          {showAdmin && (
            <>
                <Nav.Link to={"/addPet"} className="nav-link">
                  Add Pet
                </Nav.Link>

                <Nav.Link to={"/addNews"} className="nav-link">
                  Add News Feed
                </Nav.Link>
   
            </>
          )}

        {currentUser ? (
          <div className="navbar-nav ml-auto">
              <Nav.Link to={"/browse"} className="nav-link">
                Browse
              </Nav.Link>

            <Nav.Link to={"/news"} className="nav-link">
                News
              </Nav.Link>

              <Nav.Link to={"/user"} className="nav-link">
                User
              </Nav.Link>

              <Nav.Link to ={"/"} className="nav-link" onClick={logOut}>
                LogOut
              </Nav.Link>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
              <Nav.Link to={"/login"} className="nav-link">
                Login
              </Nav.Link>
              <Nav.Link to={"/register"} className="nav-link">
                Sign Up
              </Nav.Link>
          </div>
        )}
            
            {/* <Nav.Link>News</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>Logout</Nav.Link> */}
          </Nav>

           
        </Navbar.Collapse>
      </Container>
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
    </Navbar>
    
  );
};

export default NavBar;
