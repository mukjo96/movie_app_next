import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Divider, Typography, Row, Col, Tag } from "antd";
import Loading from "@features/common/Loading";

const { Paragraph, Link } = Typography;

const DetailInfos = ({ details }) => {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 24 }} md={{ span: 8 }}>
                    <div>
                        <Divider orientation="center">장르</Divider>

                        {details.genres.map(
                            (
                                genre: { id: number; name: string },
                                index: number
                            ) => (
                                <Tag
                                    key={index}
                                    color={
                                        index % 3 === 0
                                            ? "geekblue"
                                            : index % 3 === 1
                                            ? "magenta"
                                            : "orange"
                                    }
                                    style={{ marginTop: "6px" }}
                                >
                                    {genre.name}
                                </Tag>
                            )
                        )}
                    </div>
                    <div>
                        <Divider orientation="center">제작 국가</Divider>
                        {details.production_countries.map(
                            (
                                country: { iso_3166_1: string; name: string },
                                index: number
                            ) => (
                                <Tag
                                    key={index}
                                    color={
                                        index % 3 === 0
                                            ? "red"
                                            : index % 3 === 1
                                            ? "green"
                                            : "purple"
                                    }
                                >
                                    {nationtoKR(country.name)}
                                </Tag>
                            )
                        )}
                    </div>
                    <Website>
                        <Divider orientation="center">공식 웹사이트</Divider>
                        {details.homepage ? (
                            <Link
                                style={{ cursor: "pointer" }}
                                href={details.homepage}
                                target="_blank"
                            >
                                {details.homepage}
                            </Link>
                        ) : (
                            <span>공식 웹사이트가 없습니다.</span>
                        )}
                    </Website>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 14, offset: 2 }}>
                    <Divider orientation="center">줄거리</Divider>
                    <Paragraph>{details.overview}</Paragraph>
                </Col>
            </Row>
            <Row align="middle">
                <StyledDivider orientation="left">제작사</StyledDivider>
                <Companies>
                    {details.production_companies.map(
                        (
                            company: {
                                name: string;
                                id: number;
                                logo_path: string | null;
                                origin_country: string;
                            },
                            index: number
                        ) => (
                            <li key={index}>{toImg(company)}</li>
                        )
                    )}
                </Companies>
            </Row>
        </Container>
    );
};

export default DetailInfos;
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Website = styled.div`
    text-align: center;
`;

const Companies = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
        margin-right: 24px;
        margin-top: 24px;
        align-self: center;

        img {
            max-width: 200px;
            width: 100%;

            justify-content: center;
        }
    }
`;

const StyledDivider = styled(Divider)`
    ::before {
        width: 13% !important;
    }

    ::after {
        width: 87% !important;
    }

    @media screen and (max-width: 768px) {
        ::before {
            width: 50% !important;
        }
        ::after {
            width: 50% !important;
        }
    }
`;

function toImg(s) {
    if (s.logo_path != null) {
        return (
            <img
                src={"https://image.tmdb.org/t/p/w500" + s.logo_path}
                alt={s.name}
                title={s.name}
            />
        );
    }
}

function nationtoKR(s) {
    if (s === "United States of America") return "미국";
    else if (s === "China") return "중국";
    else if (s === "Bulgaria") return "불가리아";
    else if (s === "Estonia") return "에스토니아";
    else if (s === "United Kingdom") return "영국";
    else if (s === "Japan") return "일본";
    else if (s === "Belgium") return "벨기에";
    else if (s === "France") return "프랑스";
    else if (s === "South Korea") return "한국";
    else if (s === "Colombia") return "콜롬비아";
    else if (s === "Netherlands") return "네덜란드";
    else if (s === "Germany") return "독일";
    else if (s === "India") return "인도";
    else if (s === "Canada") return "캐나다";
    else if (s === "Russia") return "러시아";
    else if (s === "Ireland") return "아일랜드";
    else if (s === "New Zealand") return "뉴질랜드";
    else if (s === "Austrailia") return "호주";
    else if (s === "Italy") return "이탈리아";
    else if (s === "Switzerland") return "스위스";
    else if (s === "Georgia") return "조지아";
    else if (s === "Croatia") return "크로아티아";
    else if (s === "Serbia") return "세르비아";
    else if (s === "Thailand") return "태국";
    else return s;
}
