import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const GenderInput = props => {
    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center'>
            <Col sm={3}>
                <Form.Label> <span> Gender </span><span className='text-danger'> *</span> </Form.Label>
            </Col>
                <Col sm={6}>
                    <ToggleButtonGroup type='radio' name='gender' defaultValue={props.defaultValue} >
                        <ToggleButton variant='outline-primary' id='male' value='Male'>
                            Male
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='female' value='Female'>
                            Female
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default GenderInput;