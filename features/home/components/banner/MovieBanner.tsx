import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import {
    movieType,
    RateType,
    TitleType,
} from "@features/movies/types/moviesTypes";
import Link from "next/link";
import Button from "@features/common/button/Button";
import { Router, useRouter } from "next/router";

const MovieBanner = ({ movies }) => {
    const router = useRouter();
    console.log(movies);
    return (
        <Container>
            <Carousel autoplay autoplaySpeed={3000} dotPosition="top">
                {movies.slice(0, 6).map((movie: movieType, index: number) => (
                    <BackFilter>
                        <Movies
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`,
                            }}
                        ></Movies>
                        <Description>
                            <Info>
                                <Title title={movie.title}>
                                    {/* {movie.title.replace(/\s+/g, "\n")} */}
                                    {movie.title}
                                </Title>
                                <MovieInfoVote rate={movie.vote_average}>
                                    {/* <FontAwesomeIcon
                                            style={{
                                                margin: "0 auto",
                                                color: "#FECEA8",
                                            }}
                                            width="16px"
                                            className="star"
                                            icon={faStar}
                                        /> */}
                                    {movie.vote_average !== 0
                                        ? movie.vote_average.toFixed(1)
                                        : "-"}
                                </MovieInfoVote>
                            </Info>
                            <ButtonContainer>
                                <Button
                                    value="more"
                                    onClick={() => {
                                        router.push(`/movie/${movie.id}`);
                                    }}
                                />
                            </ButtonContainer>
                        </Description>
                    </BackFilter>
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
    /* background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6) 100px,
        rgba(0, 0, 0, 0.3) 100%
    ); */
    width: 100%;
    height: 100%;
    background-color: white;
    display: block;
    justify-content: space-between;
`;

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
`;

const MovieInfoVote = styled.div<RateType>`
    display: flex;
    width: 30px;
    height: 30px;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    background-color: ${(props) =>
        props.rate >= 8.0
            ? "#48b80f"
            : props.rate > 6.5
            ? "#ffb300"
            : props.rate !== 0
            ? "#ff2929"
            : "#333333"};
    margin: 2px;
    font-size: 14px;
    color: #f9f9f9;
    font-family: "Sansita Swashed";
    font-weight: bold;
    text-align: center;
    align-self: center;
    @media screen and (max-width: 768px) {
        width: 26px;
        height: 26px;
        font-size: 12px;
    }
`;

const Title = styled.span<TitleType>`
    color: #575757;
    /* background-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #f9f9f9; */
    font-family: "Noto Sans KR", serif;
    margin: 0 12px;
    text-align: right;
    font-size: ${(props) =>
        props.title.length > 19
            ? "18px"
            : props.title.length > 14
            ? "24px"
            : "28px"};
    font-weight: bold;
    white-space: pre;
    /* text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
        0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
        0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
        0 20px 20px rgba(0, 0, 0, 0.15); */

    @media screen and (max-width: 768px) {
        font-size: ${(props) =>
            props.title.length > 19
                ? "14px"
                : props.title.length > 14
                ? "16px"
                : "20px"};
        margin: 0 8px;
    }
`;

const ButtonContainer = styled.div`
    width: 240px;
    padding-right: 12px;
    cursor: pointer;
    button {
        font-size: 16px;
        font-family: "Sansita Swashed", "Noto Sans KR", serif;
        padding-bottom: 14px;
        background-color: #333333;
        box-shadow: 2px 2px 4px #d9d9d9, -2px -2px 4px #ffffff;
    }

    @media screen and (max-width: 768px) {
        width: 120px;
        padding-right: 8px;

        button {
            font-size: 14px;
            padding: 8px;
            padding-bottom: 11px;
        }
    }
`;
