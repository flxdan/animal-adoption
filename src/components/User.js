import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Col, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ErrorAlert from './ErrorAlert';
import md5 from 'md5';
import AuthService from "../services/authService";
import favService from "../services/favorites";
import { Link } from "react-router-dom";

const ListEntry = (props) => {

    const handleClick = () => {
        let data = {user: props.user, petId: props.name};

        favService.removeFavorite(props.user.id, data).then(() => {
            props.updateFavs(props.favs.filter(pet => pet.petName !== props.name))
        })
    }

    return (
        <>
            <strong style={{marginLeft: "0.5rem"}}>{props.name+ ","}</strong>
            <strong style={{marginLeft: "0.5rem"}}> {props.type + ","} </strong>
            <strong style={{marginLeft: "0.5rem"}}> {"Avaliable since " + props.date} </strong>
            <Col>
                <Link to={{pathname: `/petprofile/${props.petId}`}} style={{marginLeft: "5.5rem"}} className='btn btn-primary mx-1 float-end'> View Profile </Link>
                <Button variant="danger"  className='btn  mx-1 float-end'onClick={handleClick}>
                    Remove
                </Button>
            </Col>
            
        </>
    )
}

const FavoriteList = (props) => {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        favService.getFavorites(props.user.id).then(response => {
            setFavs([...response.favorites])
        });
    }, );

    const content = favs.map((pet , index) => {
        return (
            <ListGroup.Item as="li" className="d-flex align-items-center" key = {index+pet} >
                <ListEntry name={pet.petName} petId={pet._id} type={pet.type} user={props.user} date={pet.dateAdded} favs={favs} updateFavs={setFavs}> </ListEntry> 
            </ListGroup.Item>
        )
    }); 
  
    return (
        <>
            {favs.length > 0 ? <h3>Favorites: </h3> : <h4 className='text-center'>No favorite pets, yet. Favorite a pet from their Profile Page.</h4>}
            <ListGroup as="ol" numbered>
                {content}
            </ListGroup>
        </>
    )
}

const User = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) { return <ErrorAlert message={'Status 401: Not Authorized'} /> }
    else {
        const hashedEmail = md5(currentUser.email.trim().toLowerCase())
        return (
            <Container className='mt-5'>

                <Col lg={4} className='mx-auto mb-5'>
                <Card className='user-card p-3'>
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
                        <span className='fw-bold'>Account Type:</span> {currentUser.authorities.includes('ROLE_ADMIN') ? 'Admin' : 'Public'} 
                    </Card.Text>
                </Card>
                </Col>
                {!currentUser.authorities.includes('ROLE_ADMIN') && (
                    <FavoriteList user={currentUser}></FavoriteList>                                    
                )}
            </Container>
        );
    }
};

export default User;