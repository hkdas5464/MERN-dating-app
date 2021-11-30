import axios from 'axios';

const instance = axios.create({
    baseURL:"https://react-dating-app-mern.herokuapp.com/"
})

export default instance;