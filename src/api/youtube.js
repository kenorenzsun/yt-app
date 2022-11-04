import axios from 'axios';

const KEY = 'AIzaSyBmmSOT4okGHP7zCI48CRXvucJzoyHa1KU';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY,
        type: 'video',
    }
})