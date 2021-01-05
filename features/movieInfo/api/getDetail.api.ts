import axios from "axios";

export async function getMovieDetails(id) {
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
        );
        const movieData = response.data;
        return movieData;
    } catch (error) {
        console.log(error);
    }
}

export async function getMovieCredits(id) {
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
        );
        const movieData = response.data;
        return movieData;
    } catch (error) {
        console.log(error);
    }
}

export async function getRecommendations(id, page) {
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?page=${page}&api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
        );
        const movieData = response.data;
        return movieData;
    } catch (error) {
        console.log(error);
    }
}

export async function getMovieVideos(id) {
    try {
        let response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
        );
        const movieData = response.data;
        return movieData;
    } catch (error) {
        console.log(error);
    }
}
