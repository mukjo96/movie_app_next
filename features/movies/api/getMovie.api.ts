import axios from "axios";

export async function getNowPlaying(page) {
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?sort_by=vote_average.desc&api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=${page}&region=KR`
        );
        const movieData = response.data;
        return movieData;
    } catch (error) {
        console.log(error);
    }
}
export async function getTopRated(page) {
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=${page}&region=KR`
        );
        const movieData = response.data;
        return movieData;
    } catch (error) {
        console.log(error);
    }
}
export async function getUpcoming(page) {
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=${page}&region=KR`
        );
        const movieData = response.data;
        return movieData;
    } catch (error) {
        console.log(error);
    }
}
