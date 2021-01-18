import React from "react";
import styled from "styled-components";
import LogoutButton from "@features/common/button/LogoutButton";
import ProfileButton from "@features/common/button/ProfileButton";

const NavButtons = () => {
    return (
        <Container>
            <LogoutButton />
            <ProfileButton />
        </Container>
    );
};

export default NavButtons;

const Container = styled.div`
    align-self: center;
    > * {
        margin: 0 8px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 1vh;
    }
`;
