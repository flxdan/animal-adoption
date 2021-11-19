import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NewsItem from "./news_list_item";
import newsService from "../services/news";

const DisplayNews = (props) => {
  const content = props.news_array.map((news, index) => {
    return (
      <NewsItem
        key={index}
        headline={news.headline}
        content={news.blurb}
        date = {news.dateAdded}
      ></NewsItem>
    );
  });
  
  return <>{content}</>;
};

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    newsService.getAll().then(response => {
      console.log(response)
      setNews(response);
    });
  }, []);

  return (
    <>
      <Container>
        <DisplayNews news_array = {news}/>
      </Container>
    </>
  );
};

export default NewsList;
