import { Divider } from "antd";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { moviesType } from "../types/moviesTypes";

const MovieCard = ({ movies }: moviesType) => {
    return (
        <Container>
            <Link href={`/movie/${movies.id}`}>
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
                                <MovieInfoTitle>{movies.title}</MovieInfoTitle>
                            </MovieInfoTop>
                            <div>
                                <MiddleLine />
                            </div>
                            <MovieInfoBottom>
                                <MovieInfoDetails>
                                    {movies.overview.substr(0, 50)}
                                    {movies.overview.length > 140 ? "..." : ""}
                                </MovieInfoDetails>
                                <MovieInfoVote>
                                    <FontAwesomeIcon
                                        style={{
                                            margin: "0 auto",
                                            color: "#FECEA8",
                                        }}
                                        width="16px"
                                        className="star"
                                        icon={faStar}
                                    />
                                    {movies.vote_average.toFixed(1)}
                                </MovieInfoVote>
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
    max-width: 100%;
    text-decoration: none;
    color: #eee;
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

const MoviePoster = styled.div`
    position: relative;
    width: 250px;
    height: 350px;

    @media screen and (max-width: 600px) {
        width: 125px;
        height: 175px;
    }
`;

const MovieImg = styled.img`
    width: 250px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;

    @media screen and (max-width: 600px) {
        width: 125px;
        height: 175px;
        border-radius: 10px;
    }
`;

const MovieInfoTop = styled.div`
    text-align: left;
    font-weight: bolder;

    @media screen and (max-width: 600px) {
        width: 125px;
        font-size: 12px;
    }
`;

const MovieInfoTitle = styled.h3`
    color: #f9f9f9;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
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

const MovieInfoVote = styled.div`
    display: flex;
    width: 40px;
    flex-direction: column;
    border-radius: 8px;
    background-color: #e84a5f;
    padding: 4px;
    color: white;
    text-align: center;
`;
