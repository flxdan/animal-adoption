import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const dogBreeds = [
    {label: 'Boxer', value: 'Boxer'},
    {label: 'Mixed', value: 'Mixed'},
    {label: 'Pug', value: 'Pug'}
];
const catBreeds = [
    {label: 'American Shorthair', value: 'American Shorthair'},
    {label: 'Tabby', value: 'Tabby'},
    {label: 'Tuxedo', value: 'Tuxedo'}
];
const otherBreeds = [
    {label: 'Pig', value: 'Pig'},
    {label: 'Bird', value: 'Bird'},
    {label: 'Rabbit', value: 'Rabbit'}
];

const AddPetForm = props => {
    const [selectedPetType, setSelectedPetType] = useState('Dog');
    const [breeds, setBreeds] = useState(dogBreeds);

    const handlePetTypeChange = (petTypeValue) => {
        setSelectedPetType(petTypeValue);
        if (petTypeValue === 'Dog') {
            setBreeds(dogBreeds);
        } else if (petTypeValue === 'Cat') {
            setBreeds(catBreeds);
        } else {
            setBreeds(otherBreeds);
        }
    }

    const inputs = {
        'petName' : '',
        'type' : '',
        'breed' : '',
        'age' : '',
        'disposition' : [],
        'fixed' : null,
        'availability' : '',
        'description' : '',
        'picFiles' : [],
        'dateAdded' : ''
    };

    const addPetHandler = (e) => {
        // LOG FORM DATA TO CONSOLE
        
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            
            if (key === 'disposition' || key === 'picFiles') {
                inputs[key].push(value)
            }
            else {
                inputs[key] = value;
            }
        }
        inputs['dateAdded'] = getDate();
        console.log(inputs)
        e.preventDefault();
    }

    const getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return `${month+1}/${day}/${year}` 
    }

    return (
        <Container fluid='md' className='px-5 my-5 mx-auto'>
            <Form onSubmit={addPetHandler}>
                <div className='d-flex justify-content-center mb-3'>
                    <h2> Add a Pet </h2>
                </div>
                <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> Pet Name </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Control type='text' name='petName' placeholder='Pet Name' />
                    </Col>
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row} className='mb-3 justify-content-center' controlId='type' onSelect={handlePetTypeChange}>
                        <Col sm={3}>
                            <Form.Label> Type </Form.Label>
                        </Col>
                        <Col sm={6}>
                            <ToggleButtonGroup type='radio' name='type' value={selectedPetType} onChange={handlePetTypeChange}>
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

                <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> Breed </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Select defaultValue='Select Breed...' name='breed'>
                            <option value='--Select Breed--'> --Select Breed-- </option>
                            {breeds.map((breed) => {return <option key={breed.value} value={breed.value}>{breed.label}</option>})}
                        </Form.Select>
                    </Col>
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row} className='mb-3 justify-content-center'>
                        <Col sm={3}>
                            <Form.Label> Age </Form.Label>
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

                <fieldset>
                    <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> Neutered / Spayed </Form.Label>
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

                <fieldset>
                    <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> Availability </Form.Label>
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

                <Form.Group as={Row} className='mb-3 justify-content-center'>
                <Col sm={3}>
                        <Form.Label> Description </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Control as='textarea' rows={5} name='description'/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> Pictures </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Control type='file' accept='image/*' multiple name='picFiles'/>
                    </Col>
                </Form.Group>

                <Row className='justify-content-center'>
                    <Col sm={9} className='text-center d-grid'>
                        <Button type='submit' className='mt-3' variant='primary' value='Submit'>
                            Add Pet
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default AddPetForm;