import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import { movieType } from "@features/movies/types/moviesTypes";
import Link from "next/link";

const MovieBanner = ({ movies }) => {
    console.log(movies);
    return (
        <Container>
            <Carousel autoplay>
                {movies.slice(0, 5).map((movie: movieType, index: number) => (
                    <div>
                        <Link href={`/movie/${movie.id}`}>
                            <Movies
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
                                }}
                            >
                                <BackFilter>
                                    <NowPlaying>
                                        {/* NOW
                                        <br />
                                        PLAYING */}
                                    </NowPlaying>
                                    <Title
                                        style={{
                                            alignSelf: "flex-start",
                                            textAlign: "left",
                                        }}
                                    >
                                        {movie.title.replace(/\s+/g, "\n")}
                                    </Title>
                                    <Title>
                                        {movie.original_title.replace(
                                            /\s+/g,
                                            "\n"
                                        )}
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
    height: 320px;

    cursor: pointer;
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
const NowPlaying = styled.h2`
    margin: 12px;
    color: #fff;
    font-size: 60px;
    display: none;
    /* background-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #eee; */
    line-height: 64px;
`;
const Title = styled.span`
    color: #fff;
    /* background-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #eee; */
    font-family: "Nanum Myeongjo", serif;
    margin: 12px;
    text-align: right;
    align-self: flex-end;
    font-size: 36px;
    line-height: 40px;
    white-space: pre;
    text-shadow: 2px 2px black;
`;
