import React from "react";
import AuthService from "../services/authService";
import EditPetForm from "./EditPetForm/EditPetForm";
import ErrorAlert from "./ErrorAlert";

const AdminEditPet = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser || !currentUser.authorities.includes("ROLE_ADMIN")) { return <ErrorAlert message={'Status 403: Access Forbidden'} /> } 
    else {
        return (

            <EditPetForm />
    
        );
    }
};

export default AdminEditPet;