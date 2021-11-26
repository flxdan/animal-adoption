import { useState } from 'react';
import AlertModal from '../AlertModal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import NameInput from '../FormInputs/NameInput';
import TypeInput from '../FormInputs/TypeInput';
import BreedInput from '../FormInputs/BreedInput';
import GenderInput from '../FormInputs/GenderInput';
import AgeInput from '../FormInputs/AgeInput';
import DispositionInput from '../FormInputs/DispositionInput';
import FixedInput from '../FormInputs/FixedInput';
import AvailabilityInput from '../FormInputs/AvailabilityInput';
import DescriptionInput from '../FormInputs/DescriptionInput';

import petService from '../../services/pets';
import imgService from '../../services/images';

const AddPetForm = props => {
    const breeds = {
        'Dog': ['Beagle', 'Boxer', 'Chihuahua', 'Golden Retriever', 'Mixed Breed', 'Pitbull', 'Poodle', 'Pug'],
        'Cat': ['Bombay', 'Calico', 'Domestic Shorthair', 'Other', 'Siamese', 'Tabby', 'Tuxedo'],
        'Other': ['Bearded Dragon', 'Bird', 'Chinchilla', 'Guinea Pig', 'Other', 'Pot Bellied Pig', 'Rabbit', 'Tortoise']
    }
    
    const Messages = [{header : 'Success!', body : 'New Pet Added!'}, {header : 'Oops!', body : 'Select one to three images'}, {header : 'Oops!', body : 'Images can be up to 50KB'}, {header : 'Oops!', body : 'Fill in all required fields'}]

    const [modalShow, setModalShow] = useState(false);
    const [modalMessage, setModalMessge] = useState(Messages[0]);
    const [key, setKey] = useState(Math.random());
    const [breedKey, setBreedKey] = useState(Math.random());
    const [fileKey, setFileKey] = useState(Math.random());
    const [selectedPetType, setSelectedPetType] = useState('Dog');
    const [isLoading, setIsLoading] = useState(false)

    const handlePetTypeChange = (petTypeValue) => {
        setSelectedPetType(petTypeValue);
        setBreedKey(Math.random());
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
                        .then((imgResponse) => {});
                }
                setTimeout(() => {
                    setIsLoading(false)
                    setModalMessge(Messages[0]);
                    setModalShow(true);
                    setSelectedPetType('Dog');
                    setKey(Math.random());
                }, 3000)
            });
    }

    let inputs = {'disposition': []};
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)
        let isValid = true;
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            if (key === 'pictures') {
                if (files.length === 0) {
                    isValid = false
                    setModalMessge(Messages[1]);
                    setModalShow(true);
                    e.target[key].focus();
                    break
                }
            }
            else if (key === 'disposition') {
                inputs[key].push(value)
            }
            else {
                if (
                    (key === 'petName' && value === '') || 
                    (key === 'breed' && value === '--Select Breed--') ||
                    (key === 'description' && value === '')
                ) {
                    isValid = false
                    setModalMessge(Messages[3]);
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
                if (file.size > 50000) {
                    setFileKey(Math.random());
                setModalMessge(Messages[2]);
                setModalShow(true);
                break;
                }
                let reader = new FileReader();
                reader.onload = (event) => {
                    files.push(event.target.result)
                };
                reader.readAsDataURL(file);
            }
        }
    }
    
    const defaultValues = {
        age: 'Young' ,
        fixed: true,
        availability: 'Available',
        disposition: [],
        breed:'--Select Breed--',
        description: '',
        petName: '',
        gender: 'Male'
    }

    return (
        <Container fluid='md' className='px-5 my-5 mx-auto'>
            <AlertModal show={modalShow} onHide={hideModalHandler} message={modalMessage} />
            <Form key={key} onSubmit={submitHandler}>
                <div className='d-flex justify-content-center mb-3'>
                    <h2> Add a Pet </h2>
                </div>
                <NameInput defaultValue={defaultValues['petName']} />
                <TypeInput typeChange={handlePetTypeChange} typeSelected={selectedPetType} />
                <BreedInput key={breedKey} breeds={breeds} type={selectedPetType} />
                <GenderInput defaultValue={defaultValues['gender']} />
                <AgeInput defaultValue={defaultValues['age']} />
                <DispositionInput defaultValue={defaultValues['disposition']} />
                <FixedInput defaultValue={defaultValues['fixed']} />
                <AvailabilityInput defaultValue={defaultValues['availability']} />
                <DescriptionInput defaultValue={defaultValues['description']} />
                <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                    <Form.Label> <span> Images </span><span className='text-danger'> *</span> </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <Form.Control key={fileKey} type='file' accept='image/*' multiple name='pictures' onChange={encodeFiles} />
                        <div className='text-muted text-center my-1'>select one to three image files that are 50KB or smaller</div>
                    </Col>
                </Form.Group>
                <Row className='justify-content-center'>
                    <Col sm={9} className='text-center d-grid'>
                        <Button type='submit' className='mt-3' variant='primary' value='Submit' disabled={isLoading}>
                            {isLoading && <Spinner
                                as='span'
                                animation='grow'
                                size="sm"
                                role='status'
                                aria-hidden='true'
                            />}
                            {isLoading ? ' Saving...' : 'Add Pet'}
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>
    );
}

export default AddPetForm;