import React, {useState, useEffect } from "react";
import AuthService from "../services/authService";
import PetCard from "./PetCard";
import { Container, Row, Col} from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import Filter from './Filters'
import petService from "../services/pets"


const PetList = (props) => {

    const content = props.pet_array.map((pet , index) => {
        return (
            <Col className="d-flex" key = {index+pet}>
                <PetCard key = {index} name={pet.petName} description={pet.description} breed={pet.breed} date={pet.dateAdded} id={pet._id}></PetCard>
            </Col>
        )
    });
  
    return (
        <>
            <Row >
                {content}
            </Row>
        </>
    )
}

const Browse = () => {
    const currentUser = AuthService.getCurrentUser();
    const [pets, setPets] = useState([])

    useEffect(() => {
        petService.getAll().then(response => {
            setPets(response)
        });
    }, []);

    if (!currentUser) {
    return (
        <div>
            <h3>
                <strong>403: Access Forbiden</strong>
            </h3>
        </div>
    )
    } else {
    return (
        <>
            <h1>
                <strong>Browse Page</strong> 
            </h1>
            <SearchBar updatePets = {setPets}/>
            <Container>
                <Row>
                    <Col xs={1}>
                        <Filter filterPets = {setPets} pet_array={pets}> </Filter>
                    </Col>
                    <Col xs={10}>
                        <PetList pet_array = {pets}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
    }
};

export default Browse;