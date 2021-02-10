import Map from "@features/kakaoMap/Map";
import React from "react";
import styled from "styled-components";

const TheaterLocation = ({ theater }) => {
    return (
        <Container>
            <Map locX={theater.x} locY={theater.y} />
        </Container>
    );
};

export default TheaterLocation;

const Container = styled.div`
    text-align: center;

    width: 100%;
    height: ${(800 / 1920) * 100}vw;

    @media screen and (min-width: 1280px) {
        width: 1280px;
        height: 533px;
    }
`;
