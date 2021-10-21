import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EmailModal = props => {
    const firstMessage = {
        header : 'A new forever friend is in your future!',
        body : `Notify us about your interest in ${props.petname} and someone from our team will reach out to you soon!`
    }

    const secondMessage = {
        header : 'Email Sent!',
        body : `Thanks for your interest in ${props.petname}!`
    }

    const [message, setMessage] = useState(firstMessage);

    const adoptHandler = (e) => {
        setMessage(secondMessage)
        // SEND EMAIL
    }

    return (
        <Modal
            {...props}
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <h4>{message.header}</h4>
            </Modal.Header>
            <Modal.Body>
                <p>
                {message.body}
                </p>
            </Modal.Body>
            <Modal.Footer>
                {message.header === firstMessage.header && <Button onClick={adoptHandler}> Adopt {props.petname} </Button>}
                <Button onClick={props.onHide}> Close </Button>
            </Modal.Footer>
        </Modal>
  );
}
  
export default EmailModal;