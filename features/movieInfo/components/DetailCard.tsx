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
            <InfoDetail details={details} />
        </Container>
    );
};

export default DetailCard;

const Container = styled.div`
    background-color: #f9f9f9;
    height: 100%;
    padding-bottom: 10%;
`;
