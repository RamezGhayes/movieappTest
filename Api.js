import axios from 'axios'; 

export default axios.create({
    baseURL: 'http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=1'
});
