import React, { Fragment } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Loading from "@features/common/Loading";
import DetailCard from "../components/DetailCard";
import useSWR from "swr";

const MovieInfo = () => {
    const router = useRouter();
    const { movieid } = router.query;

    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieid}?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
    );

    console.log("movieInfo", data);
    if (!movieid) return <div>no ID!</div>;
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
        <Fragment>
            <Details>
                <DetailCard details={data} />
            </Details>
        </Fragment>
    );
};

export default MovieInfo;

const Details = styled.div``;
