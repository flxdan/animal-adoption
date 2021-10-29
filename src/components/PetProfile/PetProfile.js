import React, {useState, useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SlideShow from './SlideShow';
import SingleSlide from './SingleSlide';
import EmailModal from './EmailModal';
import PetInfoCard from './PetInfoCard';

import petService from '../../services/pets';

import './PetProfile.css'

const id = '';
const tags = [];

const PetProfile = props => {
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();
    const [imgData, setImgData] = useState();

    const showModalHandler = () => {
        setModalShow(true);
    }

    const hideModalHandler = () => {
        setModalShow(false);
    }

    // CREATE TAG ARRAY
    if (data) {
        if (tags.indexOf(data.availability) === -1) {
            tags.push(data.availability)
        }
        if (tags.indexOf(data.type) === -1) {
            tags.push(data.type)
        }
        if (tags.indexOf(data.breed) === -1) {
            tags.push(data.breed)
        }
        if (tags.indexOf(data.age) === -1) {
            tags.push(data.age)
        }
        data.disposition.forEach(item => {
            if (tags.indexOf(item) === -1) {
                tags.push(item)
            }
        })
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

    useEffect(() => {
        petService.getOne(id).then(petResponse => {setData(petResponse)});
        petService.getPetImages(id).then(imgResponse => {setImgData(imgResponse)});
    }, []);

    return (
        <Container>
            {data && <EmailModal petname={data.petName} show={modalShow} onHide={hideModalHandler} />}
            
            <Row className='petprofile'>
                {imgData && imgData.length > 1 ? <Col lg={6}>
                    <SlideShow imgs={imgData} />
                </Col> : null}

                {imgData && imgData.length === 1 ? <Col lg={6}>
                    <SingleSlide imgs={imgData} />
                </Col> : null}
                
                <Col className='d-flex align-items-center mx-auto' lg={6}>
                    <Row>
                        <Col lg={12}>
                            {data && <PetInfoCard petData={data} showModal={showModalHandler} />}
                        </Col>
                        <Col className='mt-3'>
                            {data && <div>Tags: </div>}
                            {tagButtons}
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}
  
export default PetProfile;