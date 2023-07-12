const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '36922aa72cc1b8a70a038cfb7fa33e54';

export const requests = {
    movie: {
        NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ja&page=1`,
        COMMING_SOON: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=ja&page=1`,
        POPULARS: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ja&page=1`,
        TOP_RATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ja&page=1`,
        SEARCH: `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ja&page=1&include_adult=false&query=`
    },
    tv: {
        ON_THE_AIR: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=ja&page=1`,
        POPULARS: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=ja&page=1`,
        TOP_RATED: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=ja&page=1`,
        SEARCH: `${BASE_URL}/search/tv?api_key=${API_KEY}&language=ja&page=1&include_adult=false&query=`
    }
}
