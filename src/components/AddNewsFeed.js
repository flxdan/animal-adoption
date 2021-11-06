import React from "react";
import AuthService from "../services/authService";
import NewsForm from "../components/addNews";

const AdminNewsFeed = () => {
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
            <NewsForm></NewsForm>
            
        );
    }
};

export default AdminNewsFeed;