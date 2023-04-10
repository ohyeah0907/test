import apiCaller from "../src/helpers/apiCaller.js";

window.mockup = () => {
    console.log("Start mocking")
    const axios = apiCaller();
    axios.post('/products', window.data.products);
}

