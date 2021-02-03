import { Divider } from "antd";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { moviesType, RateType, TitleType } from "../types/moviesTypes";

const MovieCard = ({ movies }: moviesType) => {
    return (
        <Container>
            <Link href={`/movie?movieid=${movies.id}`}>
                {movies ? (
                    <Moviecard>
                        <MoviePoster>
                            <MovieImg
                                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                                alt={movies.original_title}
                                title={movies.original_title}
                            />
                        </MoviePoster>
                        <MovieInfo>
                            <MovieInfoTop>
                                <MovieInfoTitle title={movies.title}>
                                    {movies.title}
                                </MovieInfoTitle>
                                <Vote>
                                    <MovieInfoVote rate={movies.vote_average}>
                                        {/* <FontAwesomeIcon
                                            style={{
                                                margin: "0 auto",
                                                color: "#FECEA8",
                                            }}
                                            width="16px"
                                            className="star"
                                            icon={faStar}
                                        /> */}
                                        {movies.vote_average !== 0
                                            ? movies.vote_average.toFixed(1)
                                            : "-"}
                                    </MovieInfoVote>
                                    <Block></Block>
                                </Vote>
                            </MovieInfoTop>
                            <div>
                                <MiddleLine />
                            </div>
                            <MovieInfoBottom>
                                <MovieInfoDetails>
                                    {movies.overview.substr(0, 50)}
                                    {movies.overview.length > 140 ? "..." : ""}
                                </MovieInfoDetails>
                            </MovieInfoBottom>
                        </MovieInfo>
                    </Moviecard>
                ) : null}
            </Link>
        </Container>
    );
};

export default MovieCard;

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Moviecard = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
    margin: 20px 10px;
    text-decoration: none;
    width: 250px;
    height: 375px;

    color: #eee;

    @media screen and (max-width: 600px) {
        width: 150px;
        height: 225px;
        margin: 10px 5px;
    }
`;

const MoviePoster = styled.div``;

const MovieImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
`;

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    padding: 12px 16px;
    align-self: end;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    /*margin: 8px;*/
    visibility: hidden;
    transition: visibility 500ms;

    ${Moviecard}:hover & {
        visibility: visible;
    }
    &:hover {
        visibility: visible;
    }
`;

const MovieInfoTop = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    font-weight: bolder;
    margin-top: -6px;
`;

const MovieInfoTitle = styled.span<TitleType>`
    color: #f9f9f9;
    font-size: 16px;
    font-size: ${(props) =>
        props.title.length > 19
            ? "11px"
            : props.title.length > 14
            ? "14px"
            : "16px"};
    font-weight: bold;
    margin: 0;
    line-height: 34px;

    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
`;

const MiddleLine = styled(Divider)`
    background-color: #ccc;
    margin: 1px;
`;

const MovieInfoBottom = styled.div`
    display: flex;
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    @media screen and (max-width: 600px) {
        font-size: 10px;
    }
`;

const MovieInfoDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    line-height: 18px;
    margin-right: 5px;
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

    @media screen and (max-width: 768px) {
        width: 26px;
        height: 26px;
        font-size: 12px;
    }
`;

const Vote = styled.div`
    display: block;
    align-self: center;
`;
const Block = styled.div`
    height: 3px;
`;
