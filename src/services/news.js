import axios from "axios";
const baseUrl = "http://localhost:8080/news"
// const baseUrl="mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3xkz8.mongodb.net/Sandbox/news"

const create = (newsObj) => {
    return axios.post(baseUrl, newsObj).then(response => response.data);
}

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
}

const newsService = {create, getAll};

export default newsService;