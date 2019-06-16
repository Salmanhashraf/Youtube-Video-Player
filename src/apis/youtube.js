import axios from 'axios';

const KEY = process.env.API_KEY;

export default axios.create({ //axios instance that is preconfigured for youtube api
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', //required by youtube api
        maxResults: 5,
        key: KEY
    }
});
