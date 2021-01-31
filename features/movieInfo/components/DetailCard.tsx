import Loading from "@features/common/Loading";
import React, { Fragment } from "react";
import styled from "styled-components";
import { detailsTypes } from "../types/detailsTypes";
import BackgroundPoster from "./backgroundPoster/BackgroundPoster";
import InfoDetail from "./movieInfo/InfoDetail";

const DetailCard = ({ details }: detailsTypes) => {
    return (
        <Container>
            <BackgroundPoster
                backdrop_path={details.backdrop_path}
                movieId={details.id}
            />
            <GradientBlock></GradientBlock>
            <InfoDetail details={details} />
        </Container>
    );
};

export default DetailCard;

const Container = styled.div`
    background-color: #f9f9f9;
    height: 100%;
    margin: 0 auto;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23); */

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;

const GradientBlock = styled.div`
    height: 2vh;
    margin-top: -1vh;
    margin-bottom: -1vh;
    backdrop-filter: blur(3px);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
    );
`;
