import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import ErrorAlert from './ErrorAlert';
import md5 from 'md5';
import AuthService from "../services/authService";

const User = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) { return <ErrorAlert message={'Status 401: Not Authorized'} /> }
    else {
        const hashedEmail = md5(currentUser.email.trim().toLowerCase())
        return (
            <Container className='mt-5'>
                
                <Col lg={4} className='mx-auto'>
                <Card className='user-card'>
                    <h3 className='mb-4 text-center'> User Profile </h3>
                    <div className='text-center'>
                    <img className='avatar' src={`https://gravatar.com/avatar/${hashedEmail}?s=200&d=identicon&f=y`} alt='user avatar' />
                    </div>
                    
                    <Card.Text className='fw-bold text-center'>
                        {currentUser.username} 
                    </Card.Text>
                    <Card.Text className='text-center'>
                       <span className='fw-bold'>Email:</span> {currentUser.email} 
                    </Card.Text>  
                    <Card.Text className='text-center'>
                        <span className='fw-bold'>Account Type:</span> {currentUser.roles.includes('ROLE_ADMIN') ? 'Admin' : 'Public'} 
                    </Card.Text>
                </Card>
                </Col>
                <h3>Favorites: </h3>
                
            </Container>
        );
    }
};

export default User;