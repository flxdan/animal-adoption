import React from "react";
import AuthService from "../services/authService";
import NewsList from './news_list';
import ErrorAlert from './ErrorAlert';

const NewsFeed = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) { return <ErrorAlert message={'Status 401: Not Authorized'}/> }
    else {
        return (

            //<h3>Newsfeed</h3>
            <NewsList></NewsList>

        );
    }
};

export default NewsFeed;