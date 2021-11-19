import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import favService from '../../services/favorites';
import { useState } from 'react';
import EditPetModal from '../EditPetForm/EditPetModal'

const PetInfoCard = props => {
    const [sucess, setSuccess] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    const hideModalHandler = (e) => {
        setModalShow(false);
    }

    const modalMessage = {body: "Added to favorites!"}

    const addFavorite = () => {
        let data = {user: props.user, pet: props.petData};
        favService.addFavorite(props.user.id, data).then((response) => {
            setSuccess(true)
            setModalShow(true)
        })
    }

    return (
        <>
        <EditPetModal show={modalShow} onHide={hideModalHandler} message={modalMessage}/>

        <Card className='p-3'>
            <Card.Title className='fs-4 fw-bold'>{props.petData.petName}</Card.Title>
            <Card.Subtitle className='mb-4'>
                {props.petData.availability}
            </Card.Subtitle>
            <Card.Subtitle className='mb-2'>
                {props.petData.age} | {props.petData.type} | {props.petData.breed} | {props.petData.fixed ? 'Neutered / Spayed' : 'Not Neutered / Spayed'}
            </Card.Subtitle>
            <Card.Subtitle className='mb-4'>
                {props.petData.disposition.join(' | ')}
            </Card.Subtitle>
            <Card.Text>
                {props.petData.description}
            </Card.Text>
            <Row>
                <Col className='mt-auto'>
                    <span className='text-muted'> Added: {props.petData.dateAdded} </span>
                </Col>
                <Col>
                    {!props.showAdmin && <Button className='mx-1 float-end' onClick={props.showModal}> Adopt Me! </Button>}
                    {!props.showAdmin && <Button variant={sucess ? "success": "primary"} className='float-end' onClick={addFavorite}> Favorite </Button>}
                    {props.showAdmin && <Button className='mx-1 float-end' onClick={props.deleteHandler}> Delete </Button>}
                    {props.showAdmin && <Link to={{pathname: `/editpet/${props.petData._id}`}} className='btn btn-primary mx-1 float-end'> Edit </Link>}
                </Col>
            </Row>
        </Card>
        </>
    )
};

export default PetInfoCard;