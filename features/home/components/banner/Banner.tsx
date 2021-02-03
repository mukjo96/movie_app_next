import Loading from "@features/common/Loading";
import { moviesType } from "@features/movies/types/moviesTypes";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import MovieBanner from "./MovieBanner";

const Banner = () => {
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/now_playing?sort_by=vote_average.desc&api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=1&region=KR`
    );

    console.log(data);
    if (error) return <div>failed to load</div>;
    if (!data)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2em",
                }}
            >
                <Loading />
            </div>
        );

    return (
        <Container>
            <MovieBanner movies={data.results} />
        </Container>
    );
};

export default Banner;

const Container = styled.div``;
