import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const TypeInput = props => {
    return (
        <fieldset>
            <Form.Group as={Row} className='mb-3 justify-content-center' controlId='type' onSelect={props.typeChange}>
                <Col sm={3}>
                    <Form.Label> <span> Type </span><span className='text-danger'> *</span> </Form.Label>
                </Col>
                <Col sm={6}>
                    <ToggleButtonGroup type='radio' name='type' value={props.typeSelected} onChange={props.typeChange}>
                        <ToggleButton variant='outline-primary' id='type-dog' value='Dog'>
                            Dog
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='type-cat' value='Cat'>
                            Cat
                        </ToggleButton>
                        <ToggleButton variant='outline-primary' id='type-other' value='Other'>
                            Other
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default TypeInput;