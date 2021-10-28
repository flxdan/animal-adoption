import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const FixedInput = props => {
    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center'>
            <Col sm={3}>
                <Form.Label> <span> Neutered / Spayed </span><span className='text-danger'> *</span> </Form.Label>
            </Col>
                <Col sm={6}>
                    <ToggleButtonGroup type='radio' name='fixed' defaultValue={true}>
                        <ToggleButton variant='outline-primary' id='fixed-true' value={true}>
                            Yes
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='fixed-false' value={false}>
                            No
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default FixedInput;