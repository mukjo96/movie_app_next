import React, { useState } from "react";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import NavLinks from "@features/home/components/navigation/NavLinks";
import NavButtons from "@features/home/components/navigation/NavButtons";
import { TextLogo } from "@features/common/logo/Logo";
import Searchbar from "@features/common/input/searchbar";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <TextLogo />
            <Hamburger className={open ? "show" : "hidden"}>
                <NavLinks open={open} />
                <Searchbar />
                <NavButtons />
            </Hamburger>
            <ToggleBtn>
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={() => setOpen(!open)}
                    width={18}
                    height={15}
                    color="#2a363b"
                    position="absolute"
                />
            </ToggleBtn>
        </Container>
    );
};

export default NavBar;

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 8px 12px;
    align-items: center;
    background-color: #f9f9f9;

    @media screen and (min-width: 1280px) {
        width: 1280px;
        align-self: center;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 24px;
    }
`;

const Hamburger = styled.div`
    &.hidden {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        &.show {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            box-shadow: 0 2px rgba(0, 0, 0, 0.12), 0 1px rgba(0, 0, 0, 0.24);
            li {
                width: 100%;
                text-align: center;
            }
        }

        &.hidden {
            display: none;
        }
    }
`;

const ToggleBtn = styled.section`
    display: none;
    position: absolute;
    right: 32px;
    top: 20.5px;
    font-size: 24px;

    @media screen and (max-width: 768px) {
        display: flex;

        &element.style {
            position: absolute;
        }
    }
`;
