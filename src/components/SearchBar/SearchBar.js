import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import searchService from '../../services/search';

const SearchBar = props => {

    const submitHandler = (e) => {
        e.preventDefault();
        const searchString = e.target['searchString']['value'].toLowerCase();

        searchService.getAll(searchString).then((response) => {
            console.log(response)
            props.updatePets(response)
        })

        //e.target['searchString']['value'] = ''
    }

    return (
        <Container className='mt-5'>
            <Form onSubmit={submitHandler}>
            <Col xs={10} className='mx-auto'>
                <Form.Label htmlFor='searchbar' visuallyHidden>
                    Search Bar
                </Form.Label>
                <InputGroup>
                    <Form.Control
                        name='searchString'
                        id='searchbar'
                        placeholder='Enter Search Terms'
                    />
                    <Button type='submit'>
                        Search
                    </Button>
                </InputGroup>
            </Col>
            </Form>
        </Container>
    )
};

export default SearchBar;