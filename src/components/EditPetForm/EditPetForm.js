import { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import EditPetModal from './EditPetModal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import ErrorAlert from '../ErrorAlert';
import NameInput from '../FormInputs/NameInput';
import TypeInput from '../FormInputs/TypeInput';
import BreedInput from '../FormInputs/BreedInput';
import AgeInput from '../FormInputs/AgeInput';
import DispositionInput from '../FormInputs/DispositionInput';
import FixedInput from '../FormInputs/FixedInput';
import AvailabilityInput from '../FormInputs/AvailabilityInput';
import DescriptionInput from '../FormInputs/DescriptionInput';

import petService from '../../services/pets';
import imgService from '../../services/images';

const EditPetForm = props => {
    const location = useLocation();
    const petID = location.pathname.slice(9).replace('/', '');

    const breeds = {
        'Dog': ['Beagle', 'Boxer', 'Chihuahua', 'Golden Retriever', 'Mixed Breed', 'Pitbull', 'Poodle', 'Pug'],
        'Cat': ['Bombay', 'Calico', 'Domestic Shorthair', 'Other', 'Siamese', 'Tabby', 'Tuxedo'],
        'Other': ['Bearded Dragon', 'Bird', 'Chinchilla', 'Guinea Pig', 'Other', 'Pot Bellied Pig', 'Rabbit', 'Turtle']
    }
    const Messages = [{header : 'Success!', body : 'Pet Saved!'}, {header : 'Oops!', body : 'Select one to three images'}, {header : 'Oops!', body : 'Images can be up to 50KB'}, {header : 'Oops!', body : 'Fill in all required fields'}]
    
    const [data, setData] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [modalMessage, setModalMessge] = useState(Messages[0]);
    const [breedKey, setBreedKey] = useState(Math.random());
    const [fileKey, setFileKey] = useState(Math.random());
    const [keepImgs, setKeepImgs] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        petService.getOne(petID).then(petResponse => {
            setData(petResponse)
        });
    }, [petID]);

    const typeChangeHandler = (petTypeValue) => {
        setData({...data, type: petTypeValue})
        setBreedKey(Math.random());
    }

    const keepImgsHandler = (value) => {
        setKeepImgs(value)
    }

    const hideModalHandler = (e) => {
        setModalShow(false);
        if (e.target.value === 'Success!') {
            setIsSubmitted(true)
        };
    }

    const sendForm = () => {
        petService.updateOne(petID, inputs)
            .then(petResponse => {
                if (!keepImgs) {
                    petService.deletePetImages(petID)
                        .then(() => {
                            if (files.length !== 0) {
                                let promiseArray = files.map(img => imgService.create({pet_id: petID, file: img}));
                                Promise.all(promiseArray)
                                    .then((imgResponse) => {console.log(imgResponse)});
                            }
                        })
                        .catch(err => {console.log(err)})
                }
                setModalMessge(Messages[0]);
                setModalShow(true);
            });
    }

    let inputs = {'disposition': []};
    const submitHandler = (e) => {
        e.preventDefault();
        let isValid = true;
        const formData = new FormData(e.currentTarget);
        for (let [key, value] of formData.entries()) {
            if (!keepImgs && key === 'pictures') {
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
            else if (key !== 'pictures' && key !== 'keep-images') {
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
        
        inputs['dateAdded'] = data['dateAdded'];
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
    if (petID === '') { return <ErrorAlert message={'Status 404: Not Found'}/> }
    else {
    return (
        <Container fluid='md' className='px-5 my-5 mx-auto'>
            {isSubmitted && <Redirect to={`/petprofile/${petID}`} />}
            <EditPetModal show={modalShow} onHide={hideModalHandler} message={modalMessage}/>
            <Form onSubmit={submitHandler}>
                <div className='d-flex justify-content-center mb-3'>
                    <h2> Edit a Pet </h2>
                </div>
                {data && <NameInput defaultValue={data.petName} />}
                {data && <TypeInput typeChange={typeChangeHandler} typeSelected={data.type} />}
                {data && <BreedInput key={breedKey} breeds={breeds} type={data.type} defaultValue={data.breed} />}
                {data && <AgeInput defaultValue={data.age} />}
                {data && <DispositionInput defaultValue={data.disposition} />}
                {data && <FixedInput defaultValue={data.fixed} />}
                {data && <AvailabilityInput defaultValue={data.availability} />}
                {data && <DescriptionInput defaultValue={data.description} />}
                <Form.Group as={Row} className='mb-3 justify-content-center'>
                    <Col sm={3}>
                        <Form.Label> <span> Images </span><span className='text-danger'> *</span> </Form.Label>
                    </Col>
                    <Col sm={6}>
                        <ToggleButtonGroup type='radio' name='keep-images' value={keepImgs} onChange={keepImgsHandler}>
                            <ToggleButton variant='outline-primary' id='keep' value={true}>
                                Keep Current Images
                            </ToggleButton>
                            <ToggleButton variant='outline-primary' id='choose-new' value={false}>
                                Replace Images
                            </ToggleButton>
                        </ToggleButtonGroup>

                        {!keepImgs && <Form.Control key={fileKey} type='file' accept='image/*' multiple name='pictures' className='mt-3' onChange={encodeFiles} />}
                        {!keepImgs && <div className='text-muted text-center my-1'>select one to three image files that are 50KB or smaller</div>}
                    </Col>
                </Form.Group>
                <Row className='justify-content-center'>
                    <Col sm={9} className='text-center d-grid'>
                        <Button type='submit' className='mt-3' variant='primary' value='Submit'>
                            Save Pet
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Container>
    );
    }
}

export default EditPetForm;