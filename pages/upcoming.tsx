import React from "react";
import styled from "styled-components";
import UpComing from "@features/movies/page/UpComing";

const UpComingPage = () => {
    return (
        <Page>
            <UpComing />
        </Page>
    );
};

export default UpComingPage;

const Page = styled.div`
    flex-direction: column;
    width: 100%;
    display: flex;
`;
