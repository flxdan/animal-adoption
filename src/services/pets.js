import axios from 'axios'
const baseUrl = 'https://scary-vault-59712.herokuapp.com/pets'

const create = (petObj) => {
    return axios.post(baseUrl, petObj).then(response => response.data);
}

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
}

const getOne = (petID) => {
    return axios.get(`${baseUrl}/${petID}`).then(response => response.data);
}

const deleteOne = (petID) => {
    return axios.delete(`${baseUrl}/${petID}`);
}

const updateOne = (petID, petObj) => {
    return axios.put(`${baseUrl}/${petID}`, petObj).then(response => response.data);
}

const getPetImages = (petID) => {
    return axios.get(`${baseUrl}/${petID}/images`).then(response => response.data);
}

const deletePetImages = (petID) => {
    return axios.delete(`${baseUrl}/${petID}/images`);
}
  

const petService = {create, getAll, getOne, deleteOne, updateOne, getPetImages, deletePetImages};

export default petService;