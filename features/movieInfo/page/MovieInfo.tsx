import React, { Fragment, useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import Loading from "@features/common/Loading";
import NavBar from "@features/home/components/navigation/NavBar";
import { getMovieDetails } from "../api/getDetail.api";
import DetailCard from "../components/DetailCard";

const MovieInfo = ({ details }) => {
    const [isLoading, setIsLoading] = useState(false);

    /* useEffect(() => {
        async function fetchDetails() {
            const movieInfo = await getMovieDetails(movieId);
            setDetails(movieInfo);
            console.log("info", movieInfo);
        }
        if (movieId !== 0) {
            fetchDetails();
            setIsLoading(false);
        }
    }, [movieId]); */

    return (
        <Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Details>
                        <DetailCard details={details} />
                    </Details>
                    <Block></Block>
                </>
            )}
        </Fragment>
    );
};

export default MovieInfo;

const Details = styled.div``;

const Block = styled.div`
    height: 50px;
`;
