import React from "react";
import styled from "styled-components";
import { Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Divider, Typography, Row, Col, Tag } from "antd";
import { RateType } from "@features/movies/types/moviesTypes";
const { Paragraph, Link } = Typography;

const MainInfo = ({ movieInfo }) => {
    const rate: number = movieInfo.vote_average;

    return (
        <Container>
            <Row>
                <Col xs={{ span: 24 }} md={{ span: 6 }}>
                    <Posterdiv>
                        <Poster
                            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                            alt={movieInfo.original_title}
                            title={movieInfo.original_title}
                        />
                    </Posterdiv>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 18 }}>
                    <Row>
                        <Infos>
                            <Title>{movieInfo.title}</Title>
                            <OriginalTitle>
                                {movieInfo.original_title}
                            </OriginalTitle>
                            <Release>
                                {movieInfo.release_date.substr(0, 4)}
                            </Release>
                        </Infos>
                        <span>
                            <StyledRate
                                disabled
                                count={5}
                                allowHalf={true}
                                value={Math.round(rate) / 2}
                            />
                            <Ratenum rate={rate}>
                                {rate} (<UserOutlined />
                                {movieInfo.vote_count})
                            </Ratenum>
                        </span>
                    </Row>
                    <Row>
                        <Col xs={{ span: 24 }} md={{ span: 8 }}>
                            <DetailDesc>
                                <Tagsmalltitle>장르</Tagsmalltitle>
                                {movieInfo.genres.map(
                                    (
                                        genre: { id: number; name: string },
                                        index: number
                                    ) => (
                                        <StyledTag
                                            key={index}
                                            color={
                                                index % 3 === 0
                                                    ? "geekblue"
                                                    : index % 3 === 1
                                                    ? "magenta"
                                                    : "orange"
                                            }
                                        >
                                            {genre.name}
                                        </StyledTag>
                                    )
                                )}
                            </DetailDesc>
                            <DetailDesc>
                                <Tagsmalltitle>제작 국가</Tagsmalltitle>
                                {movieInfo.production_countries.map(
                                    (
                                        country: {
                                            iso_3166_1: string;
                                            name: string;
                                        },
                                        index: number
                                    ) => (
                                        <StyledTag
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
                                        </StyledTag>
                                    )
                                )}
                            </DetailDesc>
                            <DetailDesc>
                                <Smalltitle>공식 웹사이트</Smalltitle>
                                {movieInfo.homepage ? (
                                    <Link
                                        style={{ cursor: "pointer" }}
                                        href={movieInfo.homepage}
                                        target="_blank"
                                    >
                                        {movieInfo.homepage}
                                    </Link>
                                ) : (
                                    <span>공식 웹사이트가 없습니다.</span>
                                )}
                            </DetailDesc>
                        </Col>
                        <Col xs={{ span: 24 }} md={{ span: 14, offset: 2 }}>
                            <DetailDesc>
                                <Smalltitle>줄거리</Smalltitle>
                                <Paragraph>{movieInfo.overview}</Paragraph>
                            </DetailDesc>
                            <DetailDesc>
                                <Smalltitle>제작사</Smalltitle>
                                <Companies>
                                    {movieInfo.production_companies
                                        .slice(0, 3)
                                        .map(
                                            (
                                                company: {
                                                    name: string;
                                                    id: number;
                                                    logo_path: string | null;
                                                    origin_country: string;
                                                },
                                                index: number
                                            ) => {
                                                if (company.logo_path) {
                                                    return (
                                                        <li key={index}>
                                                            {toImg(company)}
                                                        </li>
                                                    );
                                                }
                                            }
                                        )}
                                </Companies>
                            </DetailDesc>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MainInfo;

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
    border-radius: 10px;
    box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;

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
    font-size: 38px;
    line-height: 1.23;
    margin-bottom: 0;

    @media screen and (max-width: 768px) {
        font-size: 32px;
        display: block;
    }
`;

const OriginalTitle = styled.h5`
    color: #333333;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 0;
    font-family: "Sansita Swashed", cursive;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Release = styled.h5`
    color: #555555;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    font-family: "Sansita Swashed", cursive;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const StyledRate = styled(Rate)`
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Ratenum = styled.span<RateType>`
    margin-left: 2vw;
    background-color: ${(props) =>
        props.rate >= 8.0
            ? "#48b80f"
            : props.rate > 6.5
            ? "#ffb300"
            : "#ff2929"};
    color: #f9f9f9;
    font-family: "Sansita Swashed";
    font-weight: bold;
    border-radius: 5px;
    padding: 5px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
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

const StyledTag = styled(Tag)`
    margin-top: 10px;
`;

const Companies = styled.div`
    display: inline-flex;
    flex-wrap: wrap;

    li {
        margin-right: 2vw;
        align-self: center;
        list-style: none;

        img {
            max-width: 10vw;
            width: 100%;

            justify-content: center;
        }
    }

    @media screen and (max-width: 768px) {
        li {
            img {
                max-width: 20vw;
            }
        }
    }
`;

function nationtoKR(s: string) {
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

function toImg(s: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
}) {
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
