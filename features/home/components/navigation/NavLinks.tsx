import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Searchbar from "@features/common/input/searchbar";

const NavLinks = () => {
    const navItems = [
        { title: "Now Playing", route: "nowplaying" },
        { title: "Up Coming", route: "upcoming" },
        { title: "Top Rated", route: "toprated" },
        { title: "Theaters", route: "theaters" },
    ];

    return (
        <Container>
            {navItems.map((item, index) => (
                <Link href={`/${item.route}`}>
                    <li key={index}>{item.title}</li>
                </Link>
            ))}
            <Searchbar />
        </Container>
    );
};

export default NavLinks;

const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    li {
        list-style: none;
        font-family: "Sansita Swashed", cursive;
        font-size: 15px;
        padding: 3px;
        cursor: pointer;
        margin-right: 5px;
    }

    li:hover {
        background-color: #ed786a;
        border-radius: 4px;
    }
`;
