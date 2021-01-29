import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "@features/home/components/header/Header";
import BoxOffice from "@features/home/components/boxOffice/BoxOffice";
import Banner from "../components/banner/Banner";

const Home = () => {
    return (
        <Fragment>
            <Banner />
            <Header />
            <BoxOffice />
        </Fragment>
    );
};

export default Home;
