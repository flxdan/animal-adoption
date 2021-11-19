import React, {useEffect, useState} from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import image1 from '../images/cat-slide.jpg';
import image2 from '../images/dog-slide.jpg';
import image3 from '../images/hamster-slide.jpg';
import newsService from '../services/news.js';
import NewsItem from "./news_list_item";



const DisplayNews = (props) => {
  const content = props.news_array.map((news, index) => {
    return (
      <Col className = "d-flex">
        <NewsItem
        key={index}
        headline={news.headline}
        content={news.blurb}
        date = {news.dateAdded}
      ></NewsItem>
      </Col>
      
    );
  });
  
  return <>{content}</>;
};

const Home = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    newsService.getThree().then(response => {
      console.log(response)
      const slicedArray = response.slice(0, 3);
      setNews(slicedArray);
    });
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
      <Row>
        <DisplayNews news_array = {news}/>
      </Row>
    </Container>
  );
};

export default Home;