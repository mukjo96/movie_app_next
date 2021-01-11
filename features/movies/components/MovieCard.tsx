import { noAuto } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const MovieCard = ({ movies }) => {
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
                                <hr />
                            </div>
                            <MovieInfoBottom>
                                <MovieInfoOverview>
                                    {movies.overview.substr(0, 70)}
                                    {movies.overview.length > 140 ? "..." : ""}
                                </MovieInfoOverview>
                                <MovieInfoVote>
                                    <FontAwesomeIcon
                                        style={{
                                            margin: "0 auto",
                                            color: "yellow",
                                        }}
                                        className="star"
                                        icon={faStar}
                                    />
                                    {movies.vote_average}
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
    position: relative;
    margin: 20px 10px;
    max-width: 100%;
    text-decoration: none;
    color: black;
`;
const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    padding: 8px;
    width: 250px;
    align-self: end;
    background-color: white;
    border-radius: 0 0 8px 8px;
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
`;

const MovieImg = styled.img`
    width: 250px;
    height: 350px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
`;

const MovieInfoTop = styled.div`
    text-align: left;
    font-weight: bolder;
`;

const MovieInfoTitle = styled.div``;

const MovieInfoBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
`;

const MovieInfoOverview = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    margin-right: 5px;
`;

const MovieInfoVote = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: red;
    padding: 4px;
    color: white;
    text-align: center;
`;
