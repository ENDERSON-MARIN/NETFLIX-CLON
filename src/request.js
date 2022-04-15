const API_KEY = "17d6dbdf6225ec79cda2fc82e96492c0";

//ENDPOINTS, cada endpoint es un género de peliculas

//URL: "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213" 

//URL: "https://api.themoviedb.org/3/discover/tv?api_key=17d6dbdf6225ec79cda2fc82e96492c0&with_networks=213" 

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionsMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;




