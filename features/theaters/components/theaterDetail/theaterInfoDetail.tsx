import React from "react";
import styled from "styled-components";
import TheaterMainInfo from "./theaterMainInfo";

const TheaterInfoDetail = ({ theater }) => {
    return (
        <Container>
            <TheaterMainInfo theater={theater} />
        </Container>
    );
};

export default TheaterInfoDetail;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
`;
