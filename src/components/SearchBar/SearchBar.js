import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
            <Row className="align-items-center">
                <Col>
                <Form.Label htmlFor="searchbar" visuallyHidden>
                    Search Bar
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    name='searchString'
                    id="searchbar"
                    placeholder="Enter Search Terms"
                />
                </Col>
                <Col xs="auto">
                <Button type="submit" className="mb-2">
                    Search
                </Button>
                </Col>
            </Row>
            </Form>
        </Container>
    )
};

export default SearchBar;