import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar, Row, Col, Divider, Image, Collapse } from "antd";
import Loading from "@features/common/Loading";
import { useRouter } from "next/router";
import useSWR from "swr";
import { UserOutlined } from "@ant-design/icons";
import { castType, crewType } from "@features/movieInfo/types/detailsTypes";

const { Panel } = Collapse;

const Cast = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR`
    );

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
            <Row>
                <Col xs={{ span: 24 }} md={{ span: 10 }}>
                    <Collapse defaultActiveKey={["1"]} ghost>
                        <StyledPanel header={`\b출연`} key="1">
                            {data.cast.map(
                                (element: castType, index: number) => (
                                    <Actor key={index}>
                                        <Avatar
                                            size={64}
                                            icon={
                                                element.profile_path ? (
                                                    <Image
                                                        src={`https://www.themoviedb.org/t/p/w276_and_h350_face${element.profile_path}`}
                                                    />
                                                ) : (
                                                    <UserOutlined />
                                                )
                                            }
                                        />
                                        <ActorDesc>
                                            <Name>{element.name}</Name>
                                            <Character>
                                                {element.character}
                                            </Character>
                                        </ActorDesc>
                                    </Actor>
                                )
                            )}
                        </StyledPanel>
                    </Collapse>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 10, offset: 4 }}>
                    <Collapse defaultActiveKey={["1"]} ghost>
                        <StyledPanel header={`\b제작`} key="1">
                            {data.crew.map(
                                (element: crewType, index: number) => (
                                    <Actor key={index}>
                                        <Avatar
                                            size={64}
                                            icon={
                                                element.profile_path ? (
                                                    <Image
                                                        src={`https://www.themoviedb.org/t/p/w276_and_h350_face${element.profile_path}`}
                                                    />
                                                ) : (
                                                    <UserOutlined />
                                                )
                                            }
                                        />
                                        <ActorDesc>
                                            <Name>{element.name}</Name>
                                            <Character>{element.job}</Character>
                                        </ActorDesc>
                                    </Actor>
                                )
                            )}
                        </StyledPanel>
                    </Collapse>
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

const StyledPanel = styled(Panel)``;

const Actor = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`;

const ActorDesc = styled.div`
    margin-left: 1vh;
`;

const Name = styled.h3`
    margin: 0;
`;

const Character = styled.h4`
    margin-bottom: 0;
`;
