import axios from "axios";
const baseUrl = "https://scary-vault-59712.herokuapp.com/news"

const create = (newsObj) => {
    return axios.post(baseUrl, newsObj).then(response => response.data);
}

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
}

const getThree = () => {
    return axios.get(baseUrl, {params: {_limit:3}}).then(response => response.data);
}

const newsService = {create, getAll, getThree};

export default newsService;