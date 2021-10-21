import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SlideShow from './SlideShow';
import SingleSlide from './SingleSlide';
import EmailModal from './EmailModal';
import PetInfoCard from './PetInfoCard';

// WILL GET FROM DATABASE LATER
import dog1 from '../assets/dog1.jpeg';
import dog2 from '../assets/dog2.jpeg';
import dog3 from '../assets/dog3.jpeg';
import dog4 from '../assets/dog4.jpeg';

import './PetProfile.css'

// MOCK DATA
const petData = {
    'petName' : 'Moose',
    'type' : 'Dog',
    'breed' : 'Golden Retriever',
    'age' : 'Adult',
    'disposition' : ['Good with children', 'Good with other animals'],
    'fixed' : true,
    'availability' : 'Available',
    'description' : 'Danish fontina smelly cheese when the cheese comes out  happy. The big cheese goat caerphilly ricotta cheddar brie cottage cheese cheese and wine. Boursin the big cheese cheese and wine cheesy grin fromage red leicester cheesy feet when the cheese comes out  happy. Emmental cheese and wine cut the cheese dolcelatte fromage.',
    'picFiles' : [dog1, dog2, dog3, dog4],
    'dateAdded' : '10/20/2021'
};

// Tags?
const tags = ['Dog', 'Golden Retriever', 'Good with children', 'Good with other animals']

const PetProfile = props => {
    const [modalShow, setModalShow] = useState(false);

    const showModalHandler = () => {
        setModalShow(true);
    }

    const hideModalHandler = () => {
        setModalShow(false);
    }

    const tagButtons = tags.map((tag, idx) => {
        return (
            <Button
                className='mx-1 mt-1'
                variant='outline-primary'
                size='sm'
                key={`tag-${idx}`}
            >
                {tag}
            </Button>
        )
    })

    return (
        <Container>
            <EmailModal petname={petData.petName} show={modalShow} onHide={hideModalHandler} />
            
            <Row className='petprofile'>
                
                {petData.picFiles.length > 1 ? <Col lg={6}>
                    <SlideShow picFiles={petData.picFiles}/>
                </Col> : null}

                {petData.picFiles.length === 1 ? <Col lg={6}>
                    <SingleSlide picFiles={petData.picFiles}/>
                </Col> : null}
                
                <Col className='d-flex align-items-center mx-auto' lg={6}>
                    <Row>
                        <Col lg={12}>
                            <PetInfoCard petData={petData} showModal={showModalHandler} />
                        </Col>
                        <Col className='mt-3'>
                            <div>Tags: </div>
                            {tagButtons}
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}
  
export default PetProfile;