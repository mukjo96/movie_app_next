import React from "react";
import LoginPage from "./login";
import styled from "styled-components";
import NowPlaying from "@features/movies/page/NowPlaying";

const NowPlayingPage = () => {
    return (
        <Page>
            <NowPlaying />
        </Page>
    );
};

export default NowPlayingPage;

const Page = styled.div`
    flex-direction: column;

    width: 100%;
    display: flex;
`;
