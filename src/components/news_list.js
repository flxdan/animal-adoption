import React from "react";
import { Container } from "react-bootstrap";
import NewsItem from "./news_list_item";

const mockNews = [
  {
    "headline": "Headline 1",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 2",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 3",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 4",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },
  {
    "headline": "Headline 5",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 6",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 7",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 8",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 9",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  },{
    "headline": "Headline 10",
    "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Consequat ac felis donec et. Vel pharetra vel turpis nunc eget lorem. Viverra nibh cras pulvinar mattis nunc sed."
  }
]



const NewsList = () => {
  const content = mockNews.map((news, index) =>
  <NewsItem key = {index} headline = {news.headline} content = {news.content}></NewsItem>
  );

  return (
    <Container>
      {content}
    </Container>
  );
};

export default NewsList;
