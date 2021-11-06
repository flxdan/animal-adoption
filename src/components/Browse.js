import React, {useState, useEffect } from "react";
import AuthService from "../services/authService";
import PetCard from "./PetCard";
import { Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
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
            <Container>
                <Row >
                    {content}
                </Row>
            </Container>
        
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
            <SearchBar />
            <Container>
                <Row>
                    <Col>
                        <>
                            <h3 style={{marginTop: "3rem"}}>Filters</h3>
                            <InputGroup className="mb-3">
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                <FormControl aria-label="Text input with checkbox" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Radio aria-label="Radio button for following text input" />
                                <FormControl aria-label="Text input with radio button" />
                            </InputGroup>
                        </>
                    </Col>
                    <Col xs={11}>
                        <PetList pet_array = {pets}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
    }
};

export default Browse;