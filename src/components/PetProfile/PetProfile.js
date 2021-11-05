import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SlideShow from './SlideShow';
import SingleSlide from './SingleSlide';
import EmailModal from './EmailModal';
import PetInfoCard from './PetInfoCard';

import AuthService from '../../services/authService';
import petService from '../../services/pets';

import './PetProfile.css'

const id = '617eeb7e55c9b903d3789e16';
const tags = [];

const PetProfile = props => {
    const location = useLocation();
    const history = useHistory();
    const petID = location.pathname.slice(12);
    const [showAdmin, setShowAdmin] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();
    const [imgData, setImgData] = useState();

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
          setShowAdmin(user.roles.includes("ROLE_ADMIN"));
        }
        if (location.pathname === '/petprofile') {
            petService.getOne(id).then(petResponse => {
                setData(petResponse)
                Object.keys(petResponse).forEach(item => {if (['availability', 'type', 'breed', 'age'].includes(item)) {tags.push(petResponse[item])}})
                petResponse.disposition.forEach(item => tags.push(item))
            });
            petService.getPetImages(id).then(imgResponse => {setImgData(imgResponse)});
        }
        else {
            petService.getOne(petID).then(petResponse => {
                setData(petResponse)
                Object.keys(petResponse).forEach(item => {if (['availability', 'type', 'breed', 'age'].includes(item)) {tags.push(petResponse[item])}})
                petResponse.disposition.forEach(item => tags.push(item))
            });
            petService.getPetImages(petID).then(imgResponse => {setImgData(imgResponse)});
            
        }
    }, []);

    const showModalHandler = () => {
        setModalShow(true);
    }
    const hideModalHandler = () => {
        setModalShow(false);        
    }
    const deleteHandler = () => {
        petService.deleteOne(petID);
        history.push('/browse');
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
                            {data && <PetInfoCard showAdmin={showAdmin} petData={data} showModal={showModalHandler} deleteHandler={deleteHandler}/>}
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