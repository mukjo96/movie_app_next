import React from "react";
import styled from "styled-components";
import TopRated from "@features/movies/page/TopRated";

const TopRatedPage = () => {
    return (
        <Page>
            <TopRated />
        </Page>
    );
};

export default TopRatedPage;

const Page = styled.div`
    flex-direction: column;
    width: 100%;
    display: flex;
`;
