import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const TypeInput = props => {
    const radioOptions = ['Dog', 'Cat', 'Other'];

    const radioBtns = radioOptions.map((item, idx) => {
        return (
            <ToggleButton
                key={`radio-${idx}`}
                id={`type-${idx}`}
                variant='outline-primary'
                value={item}
            >
                {item}
            </ToggleButton>
        )
    })

    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center' controlId='type' onSelect={props.typeChange}>
                <Col sm={3}>
                    <Form.Label> <span> Type </span><span className='text-danger'> *</span> </Form.Label>
                </Col>
                <Col sm={6}>
                    <ToggleButtonGroup type='radio' name='type' value={props.typeSelected} onChange={props.typeChange}>
                        {radioBtns}
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default TypeInput;