import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavLinks = (open) => {
    const navItems = [
        { title: "Now Playing", route: "nowplaying" },
        { title: "Up Coming", route: "upcoming" },
        { title: "Top Rated", route: "toprated" },
        { title: "Theaters", route: "theater" },
    ];

    return (
        <Container className={open ? "show" : "hidden"}>
            {navItems.map((item, index) => (
                <Link key={index} href={`/${item.route}`}>
                    <li>{item.title}</li>
                </Link>
            ))}
        </Container>
    );
};

export default NavLinks;

const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline-start: 0px;
    margin: 0;
    li {
        list-style: none;
        font-family: "Sansita Swashed", cursive;
        font-size: 15px;
        padding: 3px;
        color: #333333;
        cursor: pointer;
        margin-right: 5px;
    }

    li:hover {
        background-color: #333333;
        color: #f9f9f9;
        border-radius: 4px;
    }

    @media screen and (max-width: 860px) {
        li {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 768px) {
        &.show {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-bottom: 1vh;

            li {
                margin: 1% 0;
            }
        }
    }
`;
