import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Rate } from "antd";
import Descriptions from "./Descriptions";
import Loading from "@features/common/Loading";
import { UserOutlined } from "@ant-design/icons";
import { detailsTypes } from "@features/movieInfo/types/detailsTypes";

const InfoDetail = ({ details }: detailsTypes) => {
    const movieInfo = details;
    console.log("Info", movieInfo);
    const rate = movieInfo.vote_average;

    return (
        <Container>
            <MainInfo>
                <Posterdiv>
                    <Poster
                        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                        alt={movieInfo.original_title}
                        title={movieInfo.original_title}
                    />
                </Posterdiv>
                <Titlediv>
                    <Title>{movieInfo.title}</Title>
                    <OriginalTitle>{movieInfo.original_title}</OriginalTitle>
                    <Release>{movieInfo.release_date.substr(0, 4)}</Release>
                    <span>
                        <Rate
                            disabled
                            count={5}
                            allowHalf={true}
                            value={Math.round(rate) / 2}
                        />
                        <Ratenum>
                            {rate} (<UserOutlined />
                            {movieInfo.vote_count})
                        </Ratenum>
                    </span>
                </Titlediv>
            </MainInfo>
            <Descriptions details={details} />
        </Container>
    );
};

export default InfoDetail;

const Container = styled.div`
    width: 90%;
    height: 100%;
    padding-bottom: 10%;
    margin: 0 auto;
    margin-top: -50px;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
const Title = styled.h1`
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 38px;
    line-height: 1.23;
    margin-bottom: 0;
`;

const OriginalTitle = styled.h5`
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
`;

const Release = styled.h5`
    color: #6e3731;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
`;
const MainInfo = styled.div`
    background-color: #f26b5e;
    width: 100%;
    height: 300px;
    display: inline-flex;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 15px;
`;

const Posterdiv = styled.div`
    margin-left: 24px;
    margin-right: 24px;
`;

const Titlediv = styled.div`
    align-self: center;
    margin-bottom: 10%;
`;

const Poster = styled.img`
    max-width: 200px;
    width: 100%;
    margin-top: -50px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;

const Ratenum = styled.span`
    margin-left: 1em;
    background-color: #303a40;
    color: #f2e6df;
    border-radius: 5px;
    padding: 5px;
`;
