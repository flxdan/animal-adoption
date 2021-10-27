import React, {useState, useEffect } from "react";
import AuthService from "../services/authService";

const AdminAddPet = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser || !currentUser.roles.includes("ROLE_ADMIN")) {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>403: Access Forbiden</strong>
                    </h3>
                </header>
            </div>
        )
    } else {
        return (

            <h3>Add a pet</h3>
    
        );
    }
};

export default AdminAddPet;