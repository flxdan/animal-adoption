import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const DispositionInput = (props) => {
    const checkList = ['Good with children', 'Good with other animals', 'Must be leashed at all times'];

    const checkboxes = checkList.map((item, idx) => {
        return (
            <ToggleButton
                key={`box-${idx}`}
                id={`box-${idx}`}
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
                    <Form.Label> Disposition </Form.Label>
                </Col>
                <Col sm={6}>
                    <ToggleButtonGroup type='checkbox' name='disposition' className='mb-2' defaultValue={props.defaultValue}>
                        {checkboxes}
                    </ToggleButtonGroup>
                </Col>
            </Form.Group>
        </fieldset>
    )
}

export default DispositionInput;