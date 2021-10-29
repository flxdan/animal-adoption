import React from "react";
import NavBar from "./components/navbar";
import NewsList from "./components/news_list";

const NewsPage = () => {
  return (
    <>
      <NavBar />
      <NewsList />
    </>
  );
};

export default NewsPage;
