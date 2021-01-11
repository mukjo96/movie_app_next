import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Divider, Typography, Row, Col, Tag } from "antd";
import Loading from "@features/common/Loading";

const { Paragraph, Link } = Typography;

const Details = ({ details }) => {
    const movieInfo = details.details;
    console.log(movieInfo);
    return (
        <Container>
            <Row>
                <Col span={6}>
                    <div>
                        <Divider orientation="center">GENRES</Divider>

                        {movieInfo.genres.map((genre, index) => (
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
                        ))}
                    </div>
                    <div>
                        <Divider orientation="center">
                            PRODUCTION COUNTRIES
                        </Divider>
                        {movieInfo.production_countries.map(
                            (country, index) => (
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
                    <div>
                        <Divider orientation="center">OFFICIAL WEBSITE</Divider>
                        {movieInfo.homepage ? (
                            <Link
                                style={{ cursor: "pointer" }}
                                href={movieInfo.homepage}
                                target="_blank"
                            >
                                {movieInfo.homepage}
                            </Link>
                        ) : (
                            <span>Sorry, We don't have website</span>
                        )}
                    </div>
                </Col>
                <Col span={16} offset={2}>
                    <Divider orientation="left">OVERVIEW</Divider>
                    <Paragraph
                        ellipsis={{
                            rows: 2,
                            expandable: true,
                            symbol: "more",
                        }}
                    >
                        {movieInfo.overview}
                    </Paragraph>
                </Col>
            </Row>
            <Row align="middle">
                <Divider orientation="left">PRODUCTION COMPANIES</Divider>
                <Companies>
                    {movieInfo.production_companies.map((company, index) => (
                        <li key={index}>{toImg(company)}</li>
                    ))}
                </Companies>
            </Row>
        </Container>
    );
};

export default Details;
const Container = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Companies = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
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
    else return s;
}
