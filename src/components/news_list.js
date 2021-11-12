import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NewsItem from "./news_list_item";
import newsService from "../services/news";

const mockNews = [
  {
    "headline": "Headline 1",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 2",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 3",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 4",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 5",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 6",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 7",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 8",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 9",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 10",
    "blurb" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  }
]

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
