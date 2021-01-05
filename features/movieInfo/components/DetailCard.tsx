import Loading from "@features/common/Loading";
import React, { Fragment } from "react";
import styled from "styled-components";
import BackgroundPoster from "./backgroundPoster/BackgroundPoster";
import InfoDetail from "./movieInfo/InfoDetail";

const DetailCard = ({ details }) => {
    console.log(details);
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
    height: 100%;
`;
