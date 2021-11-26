import React, {useEffect, useState} from "react";
import { Carousel, Container, Card, Row, Col } from "react-bootstrap";
import image1 from '../images/cat-slide.jpg';
import image2 from '../images/dog-slide.jpg';
import image3 from '../images/hamster-slide.jpg';
import newsService from '../services/news.js';
import petService from "../services/pets";

const DisplayNews = (props) => {
  const content = props.news_array.map((news, index) => {
    return (
      <Col xs={12} lg={4} key={index} className='d-flex'>
        <Card className = "p-3 w-100 mb-2">
            <Card.Body>
                <Card.Title>{news.headline}</Card.Title>
                <Card.Text>{news.blurb}</Card.Text>
            </Card.Body>
            <Card.Footer className = "text-muted">{news.dateAdded}</Card.Footer>
            </Card>
      </Col>
      
    );
  });
  
  return <>{content}</>;
};

const RecentPets = props => {
    const content = props.pets_array.map((pet, indx) => {
        return (
            <Col xs={12} lg={4} key={indx} className='d-flex'>
                <Card className='p-3 w-100 mb-2'>
                    <Card.Body>
                        <Card.Title>{pet.petName}</Card.Title>
                        <Card.Text>{pet.description}</Card.Text>
                    </Card.Body>
                <Card.Footer className='text-muted'>{pet.dateAdded}</Card.Footer>
            </Card>
            </Col>
        )
    })
    return content
}

const Home = () => {

  const [news, setNews] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    newsService.getThree().then(response => {
      const slicedArray = response.slice(0, 3);
      setNews(slicedArray);
    });
    petService.getAll().then(response => {
        const threeArray = response.slice(0, 3);
        setPets(threeArray);
    })
  }, []);

  return (
    <Container fluid>
      <Row>
        <Carousel>
          <Carousel.Item>
            <img className = "d-block w-100" src={image1} alt="First Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className = "d-block w-100" src={image2} alt="First Slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className = "d-block w-100" src={image3} alt="First Slide"/>
          </Carousel.Item>
        </Carousel>
        </Row>
      <Row className="center">
        <h1>Welcome</h1>
        <p>
          Here at PetMate, our goal is to make finding your forever easy by using your preferences to help you match up with a compatible pet. We have all kinds of types, breeds, and dispositions available. 
        </p>
      </Row>
      <Row className='mb-3'>
            <h2>Newest Additions: </h2>
            <RecentPets pets_array={pets}/>
      </Row>
      <Row>
            <h2>Recent News: </h2>
            <DisplayNews news_array={news}/>
      </Row>
    </Container>
  );
};

export default Home;