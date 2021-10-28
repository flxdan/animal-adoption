import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import NewsItem from "./news_list_item";

const NewsList = () => {
  return (
    <Container>
      <br />
      <CardGroup>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </CardGroup>
      <br />
      <CardGroup>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </CardGroup>
    </Container>
  );
};

export default NewsList;
