import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavLinks = () => {
    const navItems = [
        { title: "Now Playing", route: "nowplaying" },
        { title: "Up Coming", route: "upcoming" },
        { title: "Top Rated", route: "toprated" },
        { title: "Search", route: "search" },
        { title: "Theaters", route: "theaters" },
    ];

    return (
        <Container>
            {navItems.map((item, index) => (
                <Link href={`${item.route}`}>
                    <li key={index}>{item.title}</li>
                </Link>
            ))}
        </Container>
    );
};

export default NavLinks;

const Container = styled.ul`
    display: flex;
    align-items: center;
    width: 480px;
    justify-content: space-between;
    margin: 0 auto;
    li {
        list-style: none;
        font-family: "Sansita Swashed", cursive;
        font-size: 15px;
        padding: 3px;
        cursor: pointer;
    }

    li:hover {
        background-color: #ed786a;
        border-radius: 4px;
    }
`;
