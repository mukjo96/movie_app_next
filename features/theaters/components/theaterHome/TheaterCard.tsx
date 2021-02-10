import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Col, Row } from "antd";
import { RateType } from "@features/movies/types/moviesTypes";
import Link from "next/link";
import {
    RightOutlined,
    EnvironmentTwoTone,
    ShopTwoTone,
} from "@ant-design/icons";
import GDistance from "@features/kakaoMap/getDistance";

const TheaterCard = ({ theater }) => {
    const exampleRate = 8.5;

    return (
        <Container>
            <StyledCard
                bordered={false}
                title={theater.THEATER_NAME}
                extra={
                    <Link
                        href="/theater/[theaterid]"
                        as={`/theater/${theater.idx}`}
                    >
                        <RightOutlined />
                    </Link>
                }
            >
                <Col>
                    <Row>
                        <ShopTwoTone
                            style={{
                                alignSelf: "center",
                                marginRight: "4px",
                                fontSize: "16px",
                            }}
                            twoToneColor="#333333"
                        />
                        {theater.road_address_name}
                    </Row>
                    <Row>
                        <EnvironmentTwoTone
                            style={{
                                alignSelf: "center",
                                marginRight: "4px",
                                fontSize: "16px",
                            }}
                            twoToneColor="#333333"
                        />
                        <GDistance x={theater.x} y={theater.y} />
                    </Row>
                </Col>
                <MovieInfoVote rate={exampleRate}>
                    {/* {movies.vote_average !== 0
                                        ? movies.vote_average.toFixed(1)
                                        : "-"} */}
                    {exampleRate}
                </MovieInfoVote>
            </StyledCard>

            {/* <CardContainer>
                <CardTop>
                    <TheaterTitle>{theater.THEATER_NAME}</TheaterTitle>
                </CardTop>
                <CardBottom>{theater.road_address_name}</CardBottom>
            </CardContainer> */}
        </Container>
    );
};

export default TheaterCard;

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
`;

const StyledCard = styled(Card)`
    border-radius: 10px;
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
    width: 70vw;

    .ant-card-body {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    @media screen and (min-width: 1280px) {
        width: 896px;
    }

    .ant-card-extra {
        text-align: center;
        width: 30px;
        color: #333333;

        :hover {
            border-bottom: 1px solid #333333;
        }
    }

    @media screen and (max-width: 768px) {
        width: 90vw;
        .ant-card-head {
            padding: 0 12px;
        }
        .ant-card-head-title {
            font-size: 14px;
        }
        .ant-card-body {
            min-height: 64px;
            padding-left: 12px;
            font-size: 12px;
        }
    }
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
    margin-left: auto;

    @media screen and (max-width: 768px) {
        width: 26px;
        height: 26px;
        font-size: 12px;
    }
`;

/* const CardContainer = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
    margin: 10px;
    text-decoration: none;
    width: 70vw;
    height: 10vw;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
    flex-direction: column;

    padding: 12px 16px;
    align-self: end;

    color: #333333;

    @media screen and (max-width: 600px) {
        height: 125px;
        margin: 10px 5px;
    }
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    font-weight: bolder;
    margin-top: -6px;
`;

const TheaterTitle = styled.span`
    color: #333;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    line-height: 34px;

    @media screen and (max-width: 768px) {
        line-height: 20px;
    }
`;

const CardBottom = styled.div`
    display: flex;
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    @media screen and (max-width: 600px) {
        font-size: 10px;
    }
`; */
