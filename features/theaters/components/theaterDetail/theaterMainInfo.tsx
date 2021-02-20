import React from "react";
import styled from "styled-components";
import { Rate } from "antd";
import { LikeFilled } from "@ant-design/icons";
import { Button, Divider, Typography, Row, Col, Tag } from "antd";
import { RateType } from "@features/movies/types/moviesTypes";
import {
    EnvironmentOutlined,
    HomeOutlined,
    EnvironmentTwoTone,
} from "@ant-design/icons";
import GDistance from "@features/kakaoMap/getDistance";

const { Paragraph, Link } = Typography;

const TheaterMainInfo = ({ theater }) => {
    const rate: number = 8.5;

    return (
        <Container>
            <Row>
                <Col xs={{ span: 24 }} md={{ span: 6 }}>
                    <Posterdiv>
                        <Poster
                            src={
                                theater.THEATER_BRAND === "CGV"
                                    ? "/image/cgv.png"
                                    : theater.THEATER_BRAND === "롯데시네마"
                                    ? "/image/lottecinema.png"
                                    : theater.THEATER_BRAND === "메가박스"
                                    ? "/image/megabox.png"
                                    : "/image/etc_theater.png"
                            }
                            alt={theater.THEATER_BRAND}
                            title={theater.THEATER_BRAND}
                        />
                    </Posterdiv>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 18 }}>
                    <Row>
                        <Infos>
                            <Title>{theater.THEATER_NAME}</Title>
                            <OriginalTitle>
                                {theater.THEATER_BRAND}
                            </OriginalTitle>
                        </Infos>
                        <span>
                            <StyledRate
                                disabled
                                count={5}
                                allowHalf={true}
                                value={Math.round(rate) / 2}
                            />
                            <Ratenum rate={rate}>
                                {rate.toFixed(1)} (
                                <LikeFilled /> {"\b"}
                                {0})
                            </Ratenum>
                        </span>
                    </Row>
                    <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <DetailDesc>
                                <Tagsmalltitle>주소</Tagsmalltitle>

                                {theater.road_address_name}
                            </DetailDesc>
                            <DetailDesc>
                                <Tagsmalltitle>전화 번호</Tagsmalltitle>
                                {theater.phone}
                            </DetailDesc>
                            {/* <DetailDesc>
                                <Smalltitle>장소 url</Smalltitle>
                                {theater.place_url ? (
                                    <Link
                                        style={{ cursor: "pointer" }}
                                        href={theater.place_url}
                                        target="_blank"
                                    >
                                        {theater.place_url}
                                    </Link>
                                ) : (
                                    <span>공식 웹사이트가 없습니다.</span>
                                )}
                            </DetailDesc> */}
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 14, offset: 2 }}>
                            <DetailDesc>
                                <Smalltitle style={{ marginBottom: 0 }}>
                                    영화관까지의 거리
                                </Smalltitle>
                                <Companies>
                                    <EnvironmentTwoTone
                                        style={{
                                            alignSelf: "center",
                                            marginRight: "4px",
                                            fontSize: "14px",
                                        }}
                                        twoToneColor="#333333"
                                    />
                                    <GDistance x={theater.x} y={theater.y} />
                                </Companies>
                            </DetailDesc>
                            <DetailDesc>
                                <Link
                                    style={{ cursor: "pointer" }}
                                    href={theater.place_url}
                                    target="_blank"
                                >
                                    <StyledButton
                                        type="primary"
                                        shape="round"
                                        icon={<HomeOutlined />}
                                    >
                                        상세 페이지
                                    </StyledButton>
                                </Link>
                                <Link
                                    style={{ cursor: "pointer" }}
                                    href={`https://map.kakao.com/link/to/${theater.id}`}
                                    target="_blank"
                                >
                                    <StyledButton
                                        type="primary"
                                        shape="round"
                                        icon={<EnvironmentOutlined />}
                                    >
                                        가는 길 찾기
                                    </StyledButton>
                                </Link>
                            </DetailDesc>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default TheaterMainInfo;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2vh 2vw;

    /*     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23);
 */
    @media screen and (max-width: 768px) {
        padding: 5px 25px;
        padding-bottom: 25px;
    }
`;

const Posterdiv = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 24px;
`;

const Poster = styled.img`
    max-width: 200px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    filter: drop-shadow(3px 3px 2px gray);

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Infos = styled.div`
    display: flex-box;
    width: 100%;
    align-items: baseline;
    @media screen and (max-width: 768px) {
    }
`;

const Title = styled.h1`
    color: #333333;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-size: 34px;
    line-height: 1.23;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        font-size: 26px;
        display: block;
    }
`;

const OriginalTitle = styled.h5`
    color: #a0a0a0;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;

    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Release = styled.h5`
    color: #555555;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    margin-left: 4px;
    font-family: "Sansita Swashed", cursive;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const StyledRate = styled(Rate)`
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const Ratenum = styled.span<RateType>`
    margin-left: 2vw;
    background-color: ${(props) =>
        props.rate >= 8.0
            ? "#48b80f"
            : props.rate > 6.5
            ? "#ffb300"
            : props.rate !== 0
            ? "#ff2929"
            : "#333333"};
    color: #f9f9f9;
    font-family: "Sansita Swashed";
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const DetailDesc = styled.div`
    margin-top: 1rem;
`;

const Smalltitle = styled.h5`
    font-size: 12px;
    color: #a0a0a0;
    margin-bottom: 6px;
`;

const Tagsmalltitle = styled.h5`
    font-size: 12px;
    color: #a0a0a0;
    margin-bottom: 0;
`;

const StyledButton = styled(Button)`
    background: #333333 !important;
    border-color: #333333 !important;
    margin-right: 8px;
`;

const StyledTag = styled(Tag)`
    margin-top: 10px;
`;

const Companies = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
`;
