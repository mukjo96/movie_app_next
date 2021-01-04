import Search from "@features/movies/page/Search";
import React from "react";
import styled from "styled-components";

const SearchPage = () => {
    return (
        <Page>
            <Search />
        </Page>
    );
};

export default SearchPage;

const Page = styled.div`
    flex-direction: column;

    width: 100%;
    display: flex;
`;
