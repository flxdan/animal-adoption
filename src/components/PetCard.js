import {Card, ListGroup, ListGroupItem,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import AuthService from "../services/authService";

const PetCard = (props) => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/funny-dog-captions-1563456605.jpg" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.breed}
                </Card.Text>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Added on {props.date}</ListGroupItem> 
            </ListGroup>
            {currentUser.roles.includes("ROLE_ADMIN") &&
            <Card.Body>
                <Button href="/addPet">Edit</Button>   
            </Card.Body>
            }
        </Card>
    )
};
  
export default PetCard;