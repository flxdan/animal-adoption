import React from "react";
import { Card } from "react-bootstrap";
//import NewsImage from '../images/newitem-image.png';


const NewsItem = (props) =>{ 
        return (
            <Card className = "w-auto p-3">
                <Card.Body>
                    <Card.Title>{props.headline}</Card.Title>
                    <Card.Text>
                    {props.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className = "text-muted">2 hours ago</Card.Footer>
            </Card>
        )
};

export default NewsItem;
