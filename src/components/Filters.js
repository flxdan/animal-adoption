import React, {useState} from "react";
import {Col, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import petService from "../services/pets";

const Filter = (props) => {
    const [value, setValue] = useState([]);
    let pets = props.pet_array

    const handleChange = (val) => {
        setValue(val)

        if (val.length === 0) {
          petService.getAll().then(response => {
            props.filterPets(response)
          });
        } 
        else {
          props.filterPets(pets.filter((pet) => val.includes(pet.age)));
        }    
    }
  

    return (
        <>
          <Col>
            <h2 style = {{flexDirection: 'column', marginTop: "2.5rem"}}>Age Filter</h2>
            <ToggleButtonGroup style = {{flexDirection: 'column'}} type="checkbox" value={value} onChange={handleChange}>
              <ToggleButton id="tbg-btn-1" value={'Young'}>
                Young
              </ToggleButton>
              <ToggleButton id="tbg-btn-2" value={'Adult'}>
                Adult
              </ToggleButton>
              <ToggleButton id="tbg-btn-3" value={"Senior"}>
                Senior
              </ToggleButton>
          </ToggleButtonGroup>
          
        </Col>

        </>
    );
};

export default Filter;