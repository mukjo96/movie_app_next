import React, { Fragment, useEffect, useState } from "react";
import { getNowPlaying } from "@features/movies/api/getMovie.api";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import MovieCard from "@features/movies/components/MovieCard";
import styled from "styled-components";
import NavBar from "@features/home/components/navigation/NavBar";
import Loading from "@features/common/Loading";

const NowPlaying = () => {
    const router = useRouter();
    const nowpage = Number(router.query.page) || 1;

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(20);

    useEffect(() => {
        async function fetchMovies() {
            const nowplaying = await getNowPlaying(nowpage);
            setMovies(nowplaying.results);
            setTotalPage(nowplaying.total_results);
        }
        fetchMovies();
        setIsLoading(false);
    }, [nowpage]);

    const onChange = (pageNumber: number) => {
        router.push(`/nowplaying?page=${pageNumber}`);
    };

    return (
        <Fragment>
            {isLoading ? (
                <Loading />
            ) : (
                <Movies>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movies={movie} />
                    ))}
                </Movies>
            )}
            <StyledPagination
                showQuickJumper
                showSizeChanger={false}
                current={nowpage}
                defaultPageSize={20}
                total={totalPage}
                onChange={onChange}
            />
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
    padding-top: 8px;
    justify-content: center;

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(auto, 150px));
        max-width: 100%;
        margin-top: 4%;
    }
`;

const StyledPagination = styled(Pagination)`
    text-align: center;
    margin: 20px 0;
`;
