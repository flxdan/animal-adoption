import axios from 'axios'
const baseUrl = 'http://localhost:3001/pets'

const create = (petObj) => {
    return axios.post(baseUrl, petObj).then(response => response.data);
}

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
}

const getOne = (petID) => {
    return axios.get(`${baseUrl}/${petID}`).then(response => response.data);
}

const getPetImages = (petID) => {
    return axios.get(`${baseUrl}/${petID}/images`).then(response => response.data);
}
  

const petService = {create, getAll, getOne, getPetImages};

export default petService;