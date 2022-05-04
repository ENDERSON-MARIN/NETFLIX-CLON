
const APIKEY = process.env.REACT_APP_API_KEY;
const BASEURL = process.env.REACT_APP_BASE_URL;

//ENDPOINTS, cada endpoint es un género de peliculas


const requests = {
    fetchTrending: `${BASEURL}trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchTopRated:`${BASEURL}movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals:`${BASEURL}discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchActionsMovies:`${BASEURL}discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`${BASEURL}discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`${BASEURL}discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`${BASEURL}discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`${BASEURL}discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;




