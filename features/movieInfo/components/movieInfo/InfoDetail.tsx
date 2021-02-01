import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Descriptions from "./Descriptions";
import { Rate } from "antd";
import Loading from "@features/common/Loading";
import { UserOutlined } from "@ant-design/icons";
import { detailsTypes } from "@features/movieInfo/types/detailsTypes";
import MainInfo from "@features/movieInfo/components/movieInfo/MainInfo";

const InfoDetail = ({ details }: detailsTypes) => {
    const movieInfo = details;
    console.log("Info", movieInfo);

    return (
        <Container>
            <MainInfo movieInfo={movieInfo} />
            <Descriptions />
        </Container>
    );
};

export default InfoDetail;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
`;
