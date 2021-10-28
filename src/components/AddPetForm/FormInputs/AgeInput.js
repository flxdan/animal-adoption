import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const AgeInput = props => {
    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center'>
                <Col sm={3}>
                    <Form.Label> <span> Age </span><span className='text-danger'> *</span> </Form.Label>
                </Col>
                        
                <Col sm={6}>
                    <ToggleButtonGroup type='radio' name='age' defaultValue='Young'>
                        <ToggleButton variant='outline-primary' id='age-young' value='Young'>
                            Young
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='age-adult' value='Adult'>
                            Adult
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='age-senior' value='Senior'>
                            Senior
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default AgeInput;