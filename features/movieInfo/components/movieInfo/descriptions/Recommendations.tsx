import Loading from "@features/common/Loading";
import MovieCard from "@features/movies/components/MovieCard";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import useSWR from "swr";

const Recommendations = () => {
    const router = useRouter();
    const id = router.query.movieId;
    /* const [actors, setActors] = useState();
    const [crews, setCrews] = useState();
    const [isLoading, setIsLoading] = useState(true); */

    /* useEffect(() => {
        console.log(id);
        async function fetchDetails() {
            const movieCredits = await getMovieCredits(id);
            setActors(movieCredits.cast);
            setCrews(movieCredits.crew);
            console.log(actors, crews);
        }
        fetchDetails();

        if (actors) {
            setIsLoading(false);
        }
    }, [id]); */

    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?page=1&api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
    );

    console.log(data);
    if (error) return <div>failed to load</div>;
    if (!data)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2em",
                }}
            >
                <Loading />
            </div>
        );

    return (
        <Container>
            <Movies>
                {data.results.map((movie) => (
                    <MovieCard key={movie.id} movies={movie} />
                ))}
            </Movies>
        </Container>
    );
};
export default Recommendations;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Movies = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(auto, 260px));
    grid-gap: 24px;
    padding-top: 1%;
    justify-content: center;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(auto, 150px));
        width: 90%;
    }
`;
