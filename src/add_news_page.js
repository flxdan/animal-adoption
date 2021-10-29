import React from "react";
import NavBar from "./components/navbar";
import NewsForm from "./components/addNews";

const AddNewsPage = () => {
  return (
    <>
      <NavBar />
      <div>
        <NewsForm />
      </div>
      
    </>
  );
};

export default AddNewsPage;
