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
                    <Infos>
                        <Title>{movieInfo.title}</Title>
                        <OriginalTitle>
                            {movieInfo.original_title}
                        </OriginalTitle>
                        <Release>{movieInfo.release_date.substr(0, 4)}</Release>
                    </Infos>
                    <span>
                        <StyledRate
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
    margin: 0 auto;
    margin-top: -50px;

    @media screen and (min-width: 1280px) {
        width: 1024px;
    }
`;

const MainInfo = styled.div`
    background-color: #333333;
    width: 100%;
    height: 100%;
    padding: 2vh 0;
    display: inline-flex;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23);
    border-radius: 15px 15px 0 0;
`;

const Infos = styled.div`
    display: flex;
    align-items: baseline;
    @media screen and (max-width: 768px) {
    }
`;
const Title = styled.h1`
    color: #f9f9f9;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 300;
    font-size: 38px;
    line-height: 1.23;
    margin-bottom: 0;
    padding-right: 1%;

    @media screen and (max-width: 768px) {
        font-size: 32px;
        display: block;
    }
`;

const OriginalTitle = styled.h5`
    color: #f9f9f9;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Sansita Swashed", cursive;
    padding-right: 1%;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Release = styled.h5`
    color: #d6d6d6;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    font-family: "Sansita Swashed", cursive;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Posterdiv = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 24px;
`;

const Titlediv = styled.div`
    align-self: center;
    width: 60%;
`;

const Poster = styled.img`
    max-width: 200px;
    width: 100%;
    margin-top: -150px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const StyledRate = styled(Rate)`
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Ratenum = styled.span`
    margin-left: 2vw;
    background-color: #f9f9f9;
    color: #333333;
    border-radius: 5px;
    padding: 5px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;
