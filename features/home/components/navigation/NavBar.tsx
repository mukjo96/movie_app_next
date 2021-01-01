import React from "react";
import styled from "styled-components";
import NavLinks from "@features/home/components/navigation/NavLinks";
import NavButtons from "@features/home/components/navigation/NavButtons";
import { TextLogo } from "@features/common/logo/Logo";

const NavBar = () => {
    return (
        <Container>
            <TextLogo />
            <NavLinks />
            <NavButtons />
        </Container>
    );
};

export default NavBar;

const Container = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 12px;

    @media screen and (min-width: 1280px) {
        width: 1280px;
        align-self: center;
    }
`;
