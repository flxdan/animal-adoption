import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NameInput = (props) => {
    return (
        <React.Fragment>
            <div className='d-flex justify-content-center mb-3'>
                    <h2> Add a Pet </h2>
                </div>
                <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> <span> Pet Name </span><span className='text-danger'> *</span> </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Control type='text' name='petName' placeholder='Pet Name' />
                    </Col>
                </Form.Group>
        </React.Fragment>
    )
}

export default NameInput;