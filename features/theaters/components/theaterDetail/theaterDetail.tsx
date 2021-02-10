import Loading from "@features/common/Loading";
import React, { Fragment } from "react";
import styled from "styled-components";
import TheaterInfoDetail from "./theaterInfoDetail";
import TheaterLocation from "./theaterLocation";

const TheaterDetail = ({ theater }) => {
    return (
        <Container>
            <TheaterLocation theater={theater} />
            <TheaterInfoDetail theater={theater} />
        </Container>
    );
};

export default TheaterDetail;

const Container = styled.div`
    background-color: #f9f9f9;
    height: 100%;
    margin: 0 auto;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23); */

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
