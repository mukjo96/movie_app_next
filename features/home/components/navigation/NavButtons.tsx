import React from "react";
import styled from "styled-components";
import LogoutButton from "@features/common/button/LogoutButton";
import ProfileButton from "@features/common/button/ProfileButton";
import Link from "next/link";

const NavButtons = () => {
    return (
        <Container>
            <LogoutButton />
            <Link href="/login">
                <ProfileButton />
            </Link>
        </Container>
    );
};

export default NavButtons;

const Container = styled.div`
    display: flex;
    align-self: center;
    > * {
        margin: 0 8px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 1vh;
        margin-bottom: 1vh;
    }
`;
