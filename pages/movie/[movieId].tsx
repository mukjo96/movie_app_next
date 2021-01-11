import {
    getMovieCredits,
    getMovieDetails,
} from "@features/movieInfo/api/getDetail.api";
import MovieInfo from "@features/movieInfo/page/MovieInfo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const details = await getMovieDetails(query.movieId);

    return {
        props: {
            details,
        },
    };
};

const MovieInfoPage = ({
    details,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            <MovieInfo details={details} />
        </div>
    );
};

export default MovieInfoPage;
