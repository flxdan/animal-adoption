import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AlertModal = props => {
    return (
        <Modal
            {...props}
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <h4>{props.message.header}</h4>
            </Modal.Header>
            <Modal.Body>
                <p>
                {props.message.body}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button value={props.message.header} onClick={props.onHide}> Close </Button>
            </Modal.Footer>
        </Modal>
  );
}
  
export default AlertModal;