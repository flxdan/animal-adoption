import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const DispositionInput = (props) => {
    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center'>
                <Col sm={3}>
                    <Form.Label> Disposition </Form.Label>
                </Col>
                <Col sm={6}>
                    <ToggleButtonGroup type="checkbox" name='disposition' className="mb-2">
                        <ToggleButton id="pet-kids" variant='outline-primary' value="Good with children">
                            Good with children
                        </ToggleButton>
                        <ToggleButton id="pet-animals" variant='outline-primary' value="Good with other animals">
                            Good with other animals
                        </ToggleButton>
                        <ToggleButton id="pet-leashed" variant='outline-primary' value="Must be leashed at all times">
                            Must be leashed at all times
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default DispositionInput;