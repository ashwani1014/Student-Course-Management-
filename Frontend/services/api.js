import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",   // <- YE BASE URL HAI
});

export default API;
