import styled from "styled-components";
import React from "react";
import Link from "next/link";

export const IconLogo = styled.img.attrs(() => ({
    src: "/image/logo.png",
}))``;

export const TextLogo = () => {
    return (
        <LogoContainer>
            <Logo />
            <Link href="/">
                <LogoName>Movie App</LogoName>
            </Link>
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img.attrs(() => ({
    src: "/image/logo.png",
}))`
    width: 40px;
    height: 40px;

    @media screen and (max-width: 860px) {
        width: 30px;
        height: 30px;
    }
`;

const LogoName = styled.a`
    text-decoration: none;
    font-family: "Sansita Swashed", cursive;
    font-weight: 500;
    color: #ed786a;
    font-size: 24px;
    margin-left: 5px;

    @media screen and (max-widht: 860px) {
        font-size: 18px;
    }
`;
