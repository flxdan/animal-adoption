import React, { useState, useEffect } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ProfileImage from './ProfileImage';
import EmailModal from './EmailModal';
import PetInfoCard from './PetInfoCard';
import ErrorAlert from '../ErrorAlert';

import AuthService from '../../services/authService';
import petService from '../../services/pets';
import searchService from '../../services/search';

import './PetProfile.css'

const TagButtons = props => {
    const tags = []
    Object.keys(props.petData).forEach(item => {if (['availability', 'type', 'breed', 'gender', 'age'].includes(item)) tags.push(props.petData[item])})
    props.petData.disposition.forEach(item => tags.push(item))
    const content = tags.map((tag, idx) => {
        return (
            <Button className='mx-1 mt-1' variant='outline-primary' size='sm' key={`tag-${idx}`} name={tag} onClick={props.tagHandler}>
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
    const petID = location.pathname.slice(12).replace('/', '');
    const currentUser = AuthService.getCurrentUser();
    const [showAdmin, setShowAdmin] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState();
    const [imgData, setImgData] = useState();
    const [makeRedirect, setMakeRedirect] = useState(false)
    const [tagPets, setTagPets] = useState([])

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
          setShowAdmin(user.authorities.includes("ROLE_ADMIN"));
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

    const tagHandler = (e) => {
        const searchTerm = e.target.name.toLowerCase()
        searchService.getAll(searchTerm).then((response) => {
            setTagPets(response)
            setMakeRedirect(true)
        })
    }
    const showModalHandler = () => {
        setModalShow(true);
    }
    const hideModalHandler = () => {
        setModalShow(false);        
    }
    const deleteHandler = () => {
        petService.deleteOne(petID).then(() => {setMakeRedirect(true)});
    }
    if (!currentUser) { return <ErrorAlert message={'Status 401: Not Authorized'}/> }
    else if (data === '') { return <ErrorAlert message={'Status 404: Not Found'}/> } 
    else {
    return (
        <Container>
            {makeRedirect && <Redirect to={{
                pathname: "/browse",
                state: { tagPets: tagPets }
            }} />}
            {data && <EmailModal petname={data.petName} show={modalShow} onHide={hideModalHandler} />}
            <Row className='petprofile'>
                
                {imgData && <Col lg={6}> <ProfileImage imgs={imgData} /> </Col>}
                
                <Col className='d-flex align-items-center mx-auto' lg={6}>
                    <Row>
                        <Col lg={12}>
                            {data && <PetInfoCard user={currentUser} showAdmin={showAdmin} petData={data} showModal={showModalHandler} deleteHandler={deleteHandler}/>}
                        </Col>
                        {data && <TagButtons petData={data} tagHandler={tagHandler} />}
                    </Row>
                </Col>

            </Row>
        </Container>
    )
    }
}
  
export default PetProfile;