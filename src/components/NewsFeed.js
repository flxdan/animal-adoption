import React, {useState, useEffect } from "react";
import AuthService from "../services/authService";
import NewsList from './news_list';

const NewsFeed = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
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

            //<h3>Newsfeed</h3>
            <NewsList></NewsList>

        );
    }
};

export default NewsFeed;