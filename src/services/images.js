import axios from 'axios'
const baseUrl = 'http://localhost:8080/images'

const create = (imgObj) => {
    return axios.post(baseUrl, imgObj).then(response => response.data);
}

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
}

const getOne = (imgID) => {
    return axios.get(`${baseUrl}/${imgID}`).then(response => response.data);
}

const imgService = {create, getAll, getOne};

export default imgService;