import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import { movieType } from "@features/movies/types/moviesTypes";
import Link from "next/link";

const MovieBanner = ({ movies }) => {
    console.log(movies);
    return (
        <Container>
            <Carousel autoplay autoplaySpeed={3000}>
                {movies.slice(0, 4).map((movie: movieType, index: number) => (
                    <div>
                        <Link href={`/movie/${movie.id}`}>
                            <Movies
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
                                }}
                            >
                                <BackFilter>
                                    <Title
                                        style={{
                                            alignSelf: "flex-start",
                                            textAlign: "left",
                                        }}
                                    >
                                        {/* Top
                                        <br />
                                        Rated */}
                                        #{index + 1}
                                    </Title>
                                    <Title>
                                        {movie.title.replace(/\s+/g, "\n")}
                                    </Title>
                                </BackFilter>
                            </Movies>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </Container>
    );
};

export default MovieBanner;

const Container = styled.div``;

const Movies = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: ${(800 / 1920) * 100}vw;

    cursor: pointer;

    @media screen and (min-width: 1280px) {
        width: 1280px;
        height: 533px;
    }
`;
const BackFilter = styled.div`
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6) 100px,
        rgba(0, 0, 0, 0.3) 100%
    );
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.span`
    color: #fff;
    /* background-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #f9f9f9; */
    font-family: "Sansita Swashed", "Noto Sans KR", serif;
    margin: 12px;
    text-align: right;
    align-self: flex-end;
    font-size: 36px;
    line-height: 40px;
    white-space: pre;
    text-shadow: 2px 2px #333333;
    /* text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
        0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
        0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
        0 20px 20px rgba(0, 0, 0, 0.15); */
`;
