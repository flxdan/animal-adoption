import React from "react";
import AuthService from "../services/authService";
import AddPetForm from "./AddPetForm/AddPetForm";
import ErrorAlert from "./ErrorAlert";

const AdminAddPet = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser || !currentUser.roles.includes("ROLE_ADMIN")) { return <ErrorAlert message={'Status 403: Access Forbidden'} /> } else {
        return (

            <AddPetForm/ >
    
        );
    }
};

export default AdminAddPet;