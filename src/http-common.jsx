import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:44375/api",
    headers: {
        'Accept': 'application/json','Content-Type': 'application/json'
    }
  });


// baseURL: "https://localhost:44375/api"
// baseURL: "https://192.168.8.249:44375/api"