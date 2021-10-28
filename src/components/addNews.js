import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const NewsForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Headline</Form.Label>
          <Form.Control type="headline" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>News Blurb</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
          Submit
      </Button>
    </Container>
  );
};

export default NewsForm;
