import { useState } from 'react';
import AddPetModal from './AddPetModal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NameInput from './FormInputs/NameInput';
import TypeInput from './FormInputs/TypeInput';
import BreedInput from './FormInputs/BreedInput';
import AgeInput from './FormInputs/AgeInput';
import DispositionInput from './FormInputs/DispositionInput';
import FixedInput from './FormInputs/FixedInput';
import AvailabilityInput from './FormInputs/AvailabilityInput';
import DescriptionInput from './FormInputs/DescriptionInput';

import petService from '../../services/pets';
import imgService from '../../services/images';

const AddPetForm = props => {
    const dogBreeds = ['Beagle', 'Boxer', 'Chihuahua', 'Golden Retriever', 'Mixed', 'Poodle', 'Pug'];
    const catBreeds = ['Bombay', 'Calico', 'Domestic Shorthair', 'Siamese', 'Tabby', 'Tuxedo'];
    const otherBreeds = ['Bearded Dragon', 'Bird', 'Chinchilla', 'Guinea Pig', 'Other', 'Pot Bellied Pig', 'Rabbit', 'Turtle'];
    const Messages = [{header : 'Success!', body : 'New pet added!'}, {header : 'Oops!', body : 'Select up to 3 files'}, {header : 'Oops!', body : 'Fill in all required fields'}]

    const [modalShow, setModalShow] = useState(false);
    const [modalMessage, setModalMessge] = useState(Messages[0])
    const [key, setKey] = useState(Math.random())
    const [fileKey, setFileKey] = useState(Math.random())
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

    const hideModalHandler = () => {
        setModalShow(false);
    }

    const sendForm = () => {
        petService.create(inputs)
            .then(petResponse => {
                if (files.length !== 0) {
                    let promiseArray = files.map(img => imgService.create({pet_id: petResponse._id, file: img}));
                    Promise.all(promiseArray)
                        .then((imgResponse) => {console.log(imgResponse)});
                }
                setModalMessge(Messages[0]);
                setModalShow(true);
                setSelectedPetType('Dog');
                setKey(Math.random());
            });
    }

    let inputs = {'disposition': []};
    const submitHandler = (e) => {
        e.preventDefault();
        let isValid = true;
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            if (key === 'disposition') {
                inputs[key].push(value)
            }
            else if (key !== 'pictures') {
                if (
                    (key === 'petName' && value === '') || 
                    (key === 'breed' && value === '--Select Breed--') ||
                    (key === 'description' && value === '')
                ) {
                    isValid = false
                    setModalMessge(Messages[2]);
                    setModalShow(true);
                    e.target[key].focus();
                    break
                }
                inputs[key] = value;
            }
        }
        inputs['dateAdded'] = new Date().toISOString().substring(0, 10);
        if (isValid) {sendForm()}
    }

    const files = []
    const encodeFiles = (event) => {
        files.length = 0;
        const numFiles = event.target.files.length;
        if (numFiles > 3) {
            setFileKey(Math.random());
            setModalMessge(Messages[1]);
            setModalShow(true);
        }
        else {
            for (let i=0; i<numFiles; i++) {
                let file = event.target.files[i];
                let reader = new FileReader();
                reader.onload = (event) => {
                    files.push(event.target.result)
                };
                reader.readAsDataURL(file);
            }
        }
    }

    return (
        <Container fluid='md' className='px-5 my-5 mx-auto'>
            <AddPetModal show={modalShow} onHide={hideModalHandler} message={modalMessage}/>
            <Form key={key} onSubmit={submitHandler}>
                
                <NameInput />
                <TypeInput typeChange={handlePetTypeChange} typeSelected={selectedPetType} />
                <BreedInput breeds={breeds} />
                <AgeInput />
                <DispositionInput />
                <FixedInput />
                <AvailabilityInput />
                <DescriptionInput />
                <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> <div>Images</div> </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Control key={fileKey} type='file' accept='image/*' multiple name='pictures' onChange={encodeFiles} />
                        <div className='text-muted text-center my-1'>select up to three image files</div>
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