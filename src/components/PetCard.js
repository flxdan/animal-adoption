import React, {useState, useEffect} from "react"
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import petService from '../services/pets';
import {Link} from 'react-router-dom';

const PetCard = (props) => {
    const [image, setImage] = useState([])

    useEffect(() => {
        petService.getPetImages(props.id).then(imgResponse => {
            if (imgResponse[0]['imgData'] !== 'undefined') {
                setImage(imgResponse[0]['imgData']);
            }
        });
    });

    return (
        <Card style={{ width: '20rem'}}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.breed}
                </Card.Text>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Link to={{pathname: `/petprofile/${props.id}`}} className='btn btn-primary mx-1 float-end'> View Profile </Link>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Added on {props.date}</ListGroupItem> 
            </ListGroup>
        </Card>
    )
};
  
export default PetCard;