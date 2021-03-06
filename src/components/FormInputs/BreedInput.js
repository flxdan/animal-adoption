import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const BreedInput = props => {
    let breeds = []
    if (props.type === 'Dog') {breeds = props.breeds['Dog']}
    if (props.type === 'Cat') {breeds = props.breeds['Cat']}
    if (props.type === 'Other') {breeds = props.breeds['Other']}
    return (
        <Form.Group as={Row} className='mb-3 justify-content-center'>
            <Col sm={3}>
                <Form.Label> <span> Breed </span><span className='text-danger'> *</span> </Form.Label>
            </Col>
            <Col sm={6}>
                <Form.Select defaultValue={props.defaultValue} name='breed'>
                    <option value='--Select Breed--'> --Select Breed-- </option>
                        {breeds.map((breed, idx) => {return <option key={`breed-${idx}`} value={breed}>{breed}</option>})}
                </Form.Select>
            </Col>
        </Form.Group>
    )
}

export default BreedInput;