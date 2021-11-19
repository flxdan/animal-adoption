import React, {useState} from "react";
import {Col, ToggleButtonGroup, ToggleButton,DropdownButton,Dropdown} from "react-bootstrap";
import petService from "../services/pets";

const Filter = (props) => {
    const [value, setValue] = useState([]);
    let pets = props.search

    const handleChange = (val) => {
        setValue(val)
        if (val.length === 0) {
          if (props.search.length > 0) {
            props.updatePets(props.search)
          } else {
            petService.getAll().then(response => {
              props.updatePets(response)
            });
          }
        } 
        else {
          if (props.search.length > 0) {
            props.updatePets(pets.filter((pet) => val.includes(pet.age)));
          } else {
            petService.getAll().then(response => {
              props.updatePets(response.filter((pet) => val.includes(pet.age)))
            });
          }
        }    
    }

    const handleSort = (val) => {
      var sortedPets = props.pets.sort(function(a,b) {
        var aComps = a['dateAdded'].split("-");
        var bComps = b['dateAdded'].split("-");
    
        var aDate = new Date(aComps[0], aComps[1], aComps[2]);
        var bDate = new Date(bComps[0], bComps[1], bComps[2]);

        if (val === 'new') {
          return bDate.getTime() - aDate.getTime() ;
        } 
        return aDate.getTime() - bDate.getTime() ;
      });
      props.updatePets([...sortedPets])
    }  

    return (
        <>
          <Col>
          <h3 style = {{flexDirection: 'column', marginTop: "2.75rem"}}>Sort Filter</h3>

          <DropdownButton id="dropdown-basic-button" title="Sort by" onSelect={handleSort} >
            <Dropdown.Item eventKey="new">Newest</Dropdown.Item>
            <Dropdown.Item  eventKey="old" >Oldest</Dropdown.Item>
          </DropdownButton>

          <h3 style = {{flexDirection: 'column', marginTop: "1.5rem"}}>Age Filter</h3>
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