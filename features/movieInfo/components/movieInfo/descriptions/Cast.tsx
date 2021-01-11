import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar, Row, Col, Divider, Tag } from "antd";
import { getMovieCredits } from "@features/movieInfo/api/getDetail.api";
import Loading from "@features/common/Loading";
import { useRouter } from "next/router";
import useSWR from "swr";

const Cast = () => {
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
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
    );

    console.log(data);
    if (error) return <div>failed to load</div>;
    if (!data) return <Loading />;

    return (
        <Container>
            <Row>
                <Col span={10}>
                    <Divider orientation="center">Actors</Divider>

                    {data.cast.map((element, index) => (
                        <Actor>
                            <Avatar
                                size={64}
                                src={`https://www.themoviedb.org/t/p/w276_and_h350_face${element.profile_path}`}
                            />
                            <ActorDesc>
                                <Name>{element.name}</Name>
                                <Character>{element.character}</Character>
                            </ActorDesc>
                        </Actor>
                    ))}
                </Col>
                <Col span={10} offset={4}>
                    <Divider orientation="center">Crew</Divider>

                    {data.crew.map((element, index) => (
                        <Actor>
                            <Avatar
                                size={64}
                                src={`https://www.themoviedb.org/t/p/w276_and_h350_face${element.profile_path}`}
                            />
                            <ActorDesc>
                                <Name>{element.name}</Name>
                                <Character>{element.job}</Character>
                            </ActorDesc>
                        </Actor>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Cast;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Actor = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`;

const ActorDesc = styled.div`
    margin-left: 1em;
`;

const Name = styled.h3`
    margin: 0;
`;

const Character = styled.h4`
    margin-bottom: 0;
`;
