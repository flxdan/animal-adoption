import React from "react";
import AuthService from "../services/authService";
import ErrorAlert from './ErrorAlert';

const User = () => {
  const currentUser = AuthService.getCurrentUser();

  if (!currentUser) { return <ErrorAlert message={'Status 401: Not Authorized'} /> }
  else {
    return (
        <div className="container">
            <header className="jumbotron">
                <h1>
                <strong>Profile Page</strong> 
                </h1>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.accessToken}
                {currentUser.accessToken}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>username:</strong> {currentUser.username}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                currentUser.roles.map((role, index) => 
                    <li key={index}>{role}</li>
                )}
            </ul>
        </div>
    );
    }
};

export default User;