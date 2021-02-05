import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Pagination } from "antd";
import { getSearchResults } from "../api/getMovie.api";
import NavBar from "@features/home/components/navigation/NavBar";
import MovieCard from "@features/movies/components/MovieCard";
import Loading from "@features/common/Loading";

const Search = () => {
    const router = useRouter();
    const text = router.query.text;
    const nowpage = Number(router.query.page) || 1;

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalPage, setTotalPage] = useState(20);

    useEffect(() => {
        async function fetchMovies() {
            const search = await getSearchResults(text, nowpage);
            setMovies(search.results);
            setTotalPage(search.total_results);
        }
        fetchMovies();
        setIsLoading(false);
    }, [nowpage, text]);

    const onChange = (pageNumber: number) => {
        router.push(`/search?text=${text}&page=${pageNumber}`);
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
                defaultPageSize={20}
                current={nowpage}
                total={totalPage}
                onChange={onChange}
            />
        </Fragment>
    );
};

export default Search;

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
        width: 90%;
    }
`;
const StyledPagination = styled(Pagination)`
    text-align: center;
    margin: 20px 0;
`;
