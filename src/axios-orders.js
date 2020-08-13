import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-63c45.firebaseio.com/'
});

export default instance;