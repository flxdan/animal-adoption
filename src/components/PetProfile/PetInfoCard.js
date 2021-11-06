import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


const PetInfoCard = props => {
    return (
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
                    {!props.showAdmin && <Button className='float-end' onClick={props.showModal}> Adopt Me! </Button>}
                    {props.showAdmin && <Button className=' mx-1 float-end' onClick={props.deleteHandler}> Delete </Button>}
                    {props.showAdmin && <Link to={{pathname: `/editpet/${props.petData._id}`}} className='btn btn-primary mx-1 float-end'> Edit </Link>}
                </Col>
            </Row>
        </Card>
    )
};

export default PetInfoCard;