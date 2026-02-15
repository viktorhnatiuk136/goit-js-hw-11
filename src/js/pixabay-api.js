import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = "54630922-1eaa7a66b1da14f358e990b9b";

export function getImagesByQuery(query) { 
    return axios.get('', {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
        .then(response => {
            return response.data;
        })
};
