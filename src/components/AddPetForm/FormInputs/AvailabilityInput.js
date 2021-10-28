import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const AvailabilityInput = props => {
    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center'>
                <Col sm={3}>
                    <Form.Label> <span> Availability </span><span className='text-danger'> *</span> </Form.Label>
                </Col>
                    <Col sm={6}>
                    <ToggleButtonGroup type='radio' name='availability' defaultValue='Available'>
                        <ToggleButton variant='outline-primary' id='available' value='Available'>
                            Available
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='not-available' value='Not Available'>                                
                            Not Available
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='pending' value='Pending'>
                            Pending
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='adopted' value='Adopted'>
                            Adopted
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default AvailabilityInput;