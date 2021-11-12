import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import ErrorAlert from './ErrorAlert';

import AuthService from "../services/authService";

const User = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) { return <ErrorAlert message={'Status 401: Not Authorized'} /> }
    else {
        return (
            <Container className='mt-5'>
                
                <Col xl={6} className='mx-auto'>
                <Card>
                    <h3 className='mb-4'> User Profile </h3>
                    <Card.Text>
                        <span className='fw-bold'>Account Type:</span> {currentUser.roles.includes('ROLE_ADMIN') ? 'Admin' : 'Public'} 
                    </Card.Text>
                    <Card.Text>
                        <span className='fw-bold'>Username:</span> {currentUser.username} 
                    </Card.Text>
                    <Card.Text>
                       <span className='fw-bold'>Email:</span> {currentUser.email} 
                    </Card.Text>     
                </Card>
                </Col>
                <h3>Favorites: </h3>
                
            </Container>
        );
    }
};

export default User;