import axios from 'axios'
const baseUrl = 'https://scary-vault-59712.herokuapp.com/pets'

const getAll = (searchString) => {
    return axios.get(`${baseUrl}/${encodeURI(searchString)}`).then(response => response.data);
}

const searchService = {getAll};

export default searchService;