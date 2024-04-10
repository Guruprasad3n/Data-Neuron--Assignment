import axios from "axios";
// https://data-neuron-assignment-ua7s.onrender.com
const baseUrlstring = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: baseUrlstring,
});


export default axiosInstance;
