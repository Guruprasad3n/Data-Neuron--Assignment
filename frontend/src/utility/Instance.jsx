import axios from "axios";
// http://localhost:8000
// https://data-neuron-assignment-ua7s.onrender.com
const baseUrlstring = "https://data-neuron-assignment-ua7s.onrender.com";

const axiosInstance = axios.create({
  baseURL: baseUrlstring,
});


export default axiosInstance;
