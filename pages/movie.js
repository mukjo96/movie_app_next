import MovieInfo from "@features/movieInfo/page/MovieInfo";
import { useRouter } from "next/dist/client/router";
import React from "react";

const MovieInfoPage = () => {
    return (
        <div>
            <MovieInfo />
        </div>
    );
};

export default MovieInfoPage;
