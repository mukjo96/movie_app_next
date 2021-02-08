import MovieInfo from "@features/movieInfo/page/MovieInfo";
import TheaterInfo from "@features/theaters/page/TheaterInfo";
import { useRouter } from "next/dist/client/router";
import React from "react";

const TheaterInfoPage = () => {
    return (
        <div>
            <TheaterInfo />
        </div>
    );
};

export default TheaterInfoPage;
