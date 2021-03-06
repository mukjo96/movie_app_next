import Theaters from "@features/theaters/page/Theaters";
import React from "react";

import styled from "styled-components";

const Index = () => {
    return (
        <Page>
            <Theaters />
        </Page>
    );
};

export default Index;

const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
