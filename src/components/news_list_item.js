import React from "react";
import { Card } from "react-bootstrap";
import { Button} from 'react-bootstrap';
import NewsImage from '../images/newitem-image.png';


const NewsItem = () =>{ 
        return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant = "top" src= {NewsImage} />
            <Card.Body>
                <Card.Title>News Headline</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
      the card's content.
                </Card.Text>
                <Button variant="primary">Read Story</Button>
            </Card.Body>
        </Card>
            )

};

export default NewsItem;
