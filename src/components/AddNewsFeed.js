import React from "react";
import AuthService from "../services/authService";
import NewsForm from "../components/addNews";
import ErrorAlert from './ErrorAlert';

const AdminNewsFeed = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser || !currentUser.authorities.includes("ROLE_ADMIN")) { return <ErrorAlert message={'Status 403: Access Forbidden'} /> } else {
        return (
            <NewsForm></NewsForm>
            
        );
    }
};

export default AdminNewsFeed;