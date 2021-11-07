import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SlideShow from './SlideShow';
import SingleSlide from './SingleSlide';
import EmailModal from './EmailModal';
import PetInfoCard from './PetInfoCard';
import ErrorAlert from '../ErrorAlert';

import AuthService from '../../services/authService';
import petService from '../../services/pets';

import './PetProfile.css'

const TagButtons = props => {
    const tags = []
    Object.keys(props.petData).forEach(item => {if (['availability', 'type', 'breed', 'age'].includes(item)) tags.push(props.petData[item])})
    props.petData.disposition.forEach(item => tags.push(item))
    const content = tags.map((tag, idx) => {
        return (
            <Button className='mx-1 mt-1' variant='outline-primary' size='sm' key={`tag-${idx}`}>
                {tag}
            </Button>
        )
    });

    return (
        <Col className='mt-3'>
            <div>Tags: </div>
            {content}
        </Col>
    )
}

const PetProfile = props => {
    const location = useLocation();
    const petID = location.pathname.slice(12);
    const currentUser = AuthService.getCurrentUser();
    const [showAdmin, setShowAdmin] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();
    const [imgData, setImgData] = useState();
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
          setShowAdmin(user.roles.includes("ROLE_ADMIN"));
        }
        if (petID.length !== 0) {
            petService.getOne(petID)
                .then(petResponse => {setData(petResponse)})
                .catch(err => {
                    setData('')
                    console.log(err)
                })
            petService.getPetImages(petID)
                .then(imgResponse => {setImgData(imgResponse)})
                .catch(err => {
                    setImgData('')
                    console.log(err)
                })
        }
        if (petID === '') {setData('')}
    }, [petID]);

    const showModalHandler = () => {
        setModalShow(true);
    }
    const hideModalHandler = () => {
        setModalShow(false);        
    }
    const deleteHandler = () => {
        petService.deleteOne(petID).then(() => {setIsDeleted(true)});
    }
    
    if (!currentUser) { return <ErrorAlert message={'Status 403: Access Forbidden'}/> }
    else if (data === '') { return <ErrorAlert message={'Status 404: Not Found'}/> } 
    else {
    return (
        <Container>
            {isDeleted && <Redirect to='/browse'/>}
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
                        {data && <TagButtons petData={data}/>}
                    </Row>
                </Col>

            </Row>
        </Container>
    )
    }
}
  
export default PetProfile;