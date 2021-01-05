import React, { Fragment, useEffect, useState } from "react";
import { getUpcoming } from "@features/movies/api/getMovie.api";
import { Pagination } from "antd";
import { useRouter } from "next/router";
import MovieCard from "@features/movies/components/MovieCard";
import styled from "styled-components";
import NavBar from "@features/home/components/navigation/NavBar";
import Loading from "@features/common/Loading";

const UpComing = () => {
    const router = useRouter();
    const nowpage = Number(router.query.page) || 1;

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(20);

    useEffect(() => {
        async function fetchMovies() {
            const upcoming = await getUpcoming(nowpage);
            setMovies(upcoming.results);
            setTotalPage(upcoming.total_results);
        }
        fetchMovies();
        setIsLoading(false);
    }, [nowpage]);

    const onChange = (pageNumber) => {
        router.push(`/upcoming?page=${pageNumber}`);
    };

    return (
        <Fragment>
            <Pagination
                showQuickJumper
                style={{
                    textAlign: "center",
                }}
                showSizeChanger={false}
                defaultPageSize={20}
                current={nowpage}
                total={totalPage}
                onChange={onChange}
            />
            {isLoading ? (
                <Loading />
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

export default UpComing;

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
