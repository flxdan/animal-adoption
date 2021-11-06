import React from "react";
import AuthService from "../services/authService";
import EditPetForm from "./EditPetForm/EditPetForm";

const AdminEditPet = () => {
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

            <EditPetForm />
    
        );
    }
};

export default AdminEditPet;