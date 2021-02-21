import Loading from "@features/common/Loading";
import React from "react";
import styled from "styled-components";

import TheaterDescriptions from "./theaterDescriptions";

import TheaterLocation from "./theaterLocation";
import TheaterMainInfo from "./theaterMainInfo";

const TheaterDetail = ({ theater }) => {
    return (
        <Container>
            <TheaterLocation theater={theater} />
            <TheaterMainInfo theater={theater} />
            <TheaterDescriptions />
        </Container>
    );
};

export default TheaterDetail;

const Container = styled.div`
    background-color: #fff;
    height: 100%;
    margin: 0 auto;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23); */

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
