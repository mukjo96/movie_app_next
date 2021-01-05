import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Loading from "@features/common/Loading";
import NavBar from "@features/home/components/navigation/NavBar";
import { getMovieDetails } from "../api/getDetail.api";
import DetailCard from "../components/DetailCard";

const MovieInfo = () => {
    const router = useRouter();
    const movieId = router.query.movieId || 0;

    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchDetails() {
            const movieInfo = await getMovieDetails(movieId);
            setDetails(movieInfo);
            console.log(movieInfo);
        }
        if (movieId !== 0) {
            fetchDetails();
            setIsLoading(false);
        }
    }, [movieId]);

    return (
        <Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <Details>
                    <DetailCard details={details} />
                </Details>
            )}
        </Fragment>
    );
};

export default MovieInfo;

const Details = styled.div``;
