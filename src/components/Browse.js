import React, {useState, useEffect } from "react";
import AuthService from "../services/authService";
import PetCard from "./PetCard";
import { Container, Row, Col} from "react-bootstrap";

const mockPets = [
    {
        "name": "Fluffy",
        "breed": 'Pitbull',
        "description": "Very good pet. Good with other aninals and kids!",
        "date": "10/12/2021"
    },
    {
        "name": "Fluffy",
        "breed": 'Pitbull',
        "description": "Very good pet. Good with other aninals and kids!",
        "date": "10/12/2021"
    },
    {
        "name": "Fluffy",
        "breed": 'Pitbull',
        "description": "Very good pet. Good with other aninals and kids!",
        "date": "10/12/2021"
    },
    {
        "name": "Fluffy",
        "breed": 'Pitbull',
        "description": "Very good pet. Good with other aninals and kids!",
        "date": "10/12/2021"
    },
    {
        "name": "Fluffy",
        "breed": 'Pitbull',
        "description": "Very good pet. Good with other aninals and kids!",
        "date": "10/12/2021"
    },
    {
        "name": "Fluffy",
        "breed": 'Pitbull',
        "description": "Very good pet. Good with other aninals and kids!",
        "date": "10/12/2021"
    },
    {
        "name": "Fluffy",
        "breed": 'Pitbull',
        "description": "Very good pet. Good with other aninals and kids!",
        "date": "10/12/2021"
    }
]

const PetList = () => {
    const content = mockPets.map((pet , index) => 
        <Col>
            <PetCard key = {index} name={pet.name} description={pet.description} breed={pet.breed} date={pet.date}></PetCard>
        </Col>
    );
  
    return (
        <>
            <Container >
                <Row>
                    {content}
                </Row>
            </Container>
        
        </>
    )
}

const Browse = () => {
  const currentUser = AuthService.getCurrentUser();

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
             
            <PetList/>
        </>
    );
    }
};

export default Browse;