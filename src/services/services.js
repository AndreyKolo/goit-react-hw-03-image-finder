import axios from 'axios';

export const getData = (query='cat', page=1) => {
    return axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=16007811-de3293636e506fef23e7bb348&image_type=photo&orientation=horizontal&per_page=12`)
};