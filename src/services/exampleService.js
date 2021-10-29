import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUser = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdmin = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUser,
  getAdmin,
};