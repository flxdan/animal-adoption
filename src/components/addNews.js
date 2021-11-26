import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

import newsService from "../services/news";
import AddNewsModal from "./AddNewsModal";

const NewsForm = () => {

  const key = useState(Math.random());

  const Messages = [{header: 'Success!', body: 'New News Item added!'}]

  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState(Messages[0]);

  const hideModalHandler = () => {
    setModalShow(false);
  }

  const sendPost = () =>{

    newsService.create(inputs).then(newsResponse =>{setTimeout(()=> {
      setModalMessage(Messages[0]);
      setModalShow(true);
    }, 2000)
  });
}

  let inputs = {}
  // add submit handler function
  const submitHandler = (e) => {
    e.preventDefault();
    let isValid = true;
    const formData = new FormData(e.currentTarget);
    for(let [key, value] of formData.entries()) {
      inputs[key] = value;
    }
    // inputs['dateAdded'] = new Date().toISOString().substring(0, 10);
    inputs['dateAdded'] = new Date().toDateString()
    if (isValid) {sendPost()}
    }

  const defaultValues = {
    headline: 'Please Enter a headline',
    blurb: ''
  }

  return (
    <Container>
      <AddNewsModal show={modalShow} onHide={hideModalHandler} message={modalMessage}/>
      <Form key={key} onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId = "form1">
          <Form.Label>Headline</Form.Label>
          <Form.Control name ="headline" type="headline" defaultValue={defaultValues['headline']}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId ="form2">
          <Form.Label>News Blurb</Form.Label>
          <Form.Control name = "blurb" as="textarea" rows={5} defaultValue={defaultValues['blurb']}/>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Post
      </Button>
      </Form>
      
    </Container>
  );
};

export default NewsForm;
