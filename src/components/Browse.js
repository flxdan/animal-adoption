import React, {useState, useEffect } from "react";
import AuthService from "../services/authService";
import PetCard from "./PetCard";
import { Container, Row, Col} from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import {useLocation} from 'react-router-dom';
import Filter from './Filters'
import petService from "../services/pets"
import ErrorAlert from './ErrorAlert';
import './css/forms.css'

const PetList = (props) => {
    const content = props.pet_array.map((pet , index) => {
        return (
            <Col className="petCardAlignment" key = {index+pet}>
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
    const [search, setSearch] = useState([])
    const { state } = useLocation();

    useEffect(() => {
        if (state) {
            setPets(state.tagPets)
            return
        }
        petService.getAll().then(response => {
            setPets(response)
        });
    }, [state]);

    if (!currentUser) { return <ErrorAlert message={'Status 401: Not Authorized'}/> }
    else {
    return (
        <>
            <SearchBar updatePets = {setPets} setSearch = {setSearch}/>
            <Container>
                <Row>
                    <Col sm={1} className="dflex">
                        <Filter updatePets = {setPets} pets = {pets} search = {search}> </Filter>
                    </Col>
                    <Col sm={10}>
                        <PetList pet_array = {pets}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
    }
};

export default Browse;