import axios from "axios";

const API_URL = "http://localhost:8080/users";

const addFavorite = (userID, data) => {
    return axios.put(`${API_URL}/${userID}/favorites`, data).then(response => response.data);
}

const getFavorites = (userID) => {
    return axios.get(`${API_URL}/${userID}/favorites`).then(response => response.data);
}

const removeFavorite = (userID, data) => {
    return axios.patch(`${API_URL}/${userID}/favorites`, data).then(response => response.data);
}

const favService = {addFavorite, getFavorites, removeFavorite};

export default favService;
