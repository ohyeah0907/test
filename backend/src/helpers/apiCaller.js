import axios from "axios";

const { HOST: host, PORT: port } = process.env;

const apiCaller = (config) => {
  const instance = axios.create({
    baseURL: `${host}:${port}/api`,
    ...config
  });  
  
  return instance
};

export default apiCaller;
