import React, { Fragment, useEffect, useState } from "react";
import { getNowPlaying } from "@features/movies/api/getMovie.api";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import MovieCard from "@features/movies/components/MovieCard";
import styled from "styled-components";
import NavBar from "@features/home/components/navigation/NavBar";

const NowPlaying = () => {
    const router = useRouter();
    const nowpage = Number(router.query.page);

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(nowpage || 1);
    const [totalPage, setTotalPage] = useState(20);

    useEffect(() => {
        async function fetchMovies() {
            const nowplaying = await getNowPlaying(currentPage);
            setMovies(nowplaying.results);
            setTotalPage(nowplaying.total_results);
        }
        fetchMovies();
        setIsLoading(false);
        console.log(currentPage, totalPage);
    }, [nowpage]);

    const onChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        router.push(`/nowplaying?page=${pageNumber}`);
    };

    return (
        <Fragment>
            <NavBar />
            <Pagination
                showQuickJumper
                style={{
                    textAlign: "center",
                }}
                showSizeChanger={false}
                defaultPageSize={20}
                total={totalPage}
                onChange={onChange}
            />
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <Movies>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movies={movie} />
                    ))}
                </Movies>
            )}
        </Fragment>
    );
};

export default NowPlaying;

const Movies = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(auto, 260px));
    grid-gap: 24px;
    padding-top: 1%;
    justify-content: center;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(auto, 150px));
        width: 90%;
    }
`;