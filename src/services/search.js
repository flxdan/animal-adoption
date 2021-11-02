import axios from 'axios'
const baseUrl = 'http://localhost:3001/search'

const getAll = (searchString) => {
    return axios.get(`${baseUrl}/${encodeURI(searchString)}`).then(response => response.data);
}

const searchService = {getAll};

export default searchService;