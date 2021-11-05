import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const AvailabilityInput = props => {
    const radioOptions = ['Available', 'Not Available', 'Pending', 'Adopted'];

    const radioBtns = radioOptions.map((item, idx) => {
        return (
            <ToggleButton
                key={`radio-${idx}`}
                id={`availability-${idx}`}
                variant='outline-primary'
                value={item}
            >
                {item}
            </ToggleButton>
        )
    })

    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center'>
                <Col sm={3}>
                    <Form.Label> <span> Availability </span><span className='text-danger'> *</span> </Form.Label>
                </Col>
                    <Col sm={6}>
                    <ToggleButtonGroup type='radio' name='availability' defaultValue={props.defaultValue}>
                        {radioBtns}
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default AvailabilityInput;