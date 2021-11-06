import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

const DescriptionInput = props => {
    return (
        <Form.Group as={Row} className='mb-3 justify-content-center'>
            <Col sm={3}>
                <Form.Label> <span> Description </span><span className='text-danger'> *</span> </Form.Label>
            </Col>
            <Col sm={6}>
                <Form.Control as='textarea' rows={5} name='description' defaultValue={props.defaultValue} />
            </Col>
        </Form.Group>
    )
}

export default DescriptionInput;