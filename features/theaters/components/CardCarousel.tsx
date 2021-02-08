import React, { useState } from "react";

import Carousel from "react-simply-carousel";
import styled from "styled-components";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export const CGVLogo = styled.img.attrs(() => ({
    src: "/image/cgv.png",
    alt: "CGV",
}))`
    width: 80%;
    height: 80%;
`;
export const LotteCinemaLogo = styled.img.attrs(() => ({
    src: "/image/lottecinema.png",
    alt: "LotteCinema",
}))`
    width: 80%;
    height: 80%;
    padding: 20px;
`;
export const MegaBoxLogo = styled.img.attrs(() => ({
    src: "/image/megabox.png",
    alt: "Megabox",
}))`
    width: 80%;
    height: 80%;
`;
export const AllTheaters = styled.img.attrs(() => ({
    src: "/image/all_theater.png",
    alt: "all",
}))`
    width: 80%;
    height: 80%;
    padding: 20px;
`;
export const EtcTheater = styled.img.attrs(() => ({
    src: "/image/etc_theater.png",
    alt: "etc",
}))`
    width: 80%;
    height: 80%;
    padding: 20px;
`;

function CardCarousel({ activeSlide, setActiveSlide }) {
    console.log(activeSlide);
    return (
        <div>
            <Carousel
                updateOnItemClick
                centerMode
                containerProps={{
                    style: {
                        width: "100%",
                        justifyContent: "space-between",
                        height: 350,
                    },
                }}
                activeSlideIndex={activeSlide}
                activeSlideProps={{
                    style: {
                        zIndex: 1,
                        fontSize: 20,
                        fontWeight: "bold",
                        filter: "none",
                        boxShadow:
                            "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                    },
                }}
                onRequestChange={setActiveSlide}
                forwardBtnProps={{
                    children: <RightOutlined />,
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        background: "white",
                        border: "none",
                        alignSelf: "center",
                    },
                }}
                backwardBtnProps={{
                    children: <LeftOutlined />,
                    style: {
                        width: 60,
                        height: 60,
                        minWidth: 60,
                        background: "white",
                        border: "none",
                        alignSelf: "center",
                    },
                }}
                itemsToShow={3}
                speed={400}
            >
                {Array.from({ length: 5 }).map((item, index) => (
                    <TheaterCard
                        style={{
                            justifyContent: "center",
                            background: "white",

                            marginLeft: "5px",
                            marginRight: "5px",
                            paddingTop: 5,
                            paddingBottom: 5,
                            textAlign: "center",
                            boxSizing: "border-box",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "10px",
                            textDecoration: "none",
                            alignSelf: "center",
                        }}
                        key={index}
                    >
                        {index == 0 ? (
                            <CardContainer>
                                <CGVLogo />
                                <TheaterName>CGV</TheaterName>
                            </CardContainer>
                        ) : index == 1 ? (
                            <CardContainer>
                                <LotteCinemaLogo />
                                <TheaterName>롯데시네마</TheaterName>
                            </CardContainer>
                        ) : index == 2 ? (
                            <CardContainer>
                                <MegaBoxLogo />
                                <TheaterName>메가박스</TheaterName>
                            </CardContainer>
                        ) : index == 3 ? (
                            <CardContainer>
                                <EtcTheater />
                                <TheaterName>기타</TheaterName>
                            </CardContainer>
                        ) : (
                            <CardContainer>
                                <AllTheaters />
                                <TheaterName>전체</TheaterName>
                            </CardContainer>
                        )}
                    </TheaterCard>
                ))}
                {/* <TheaterCard
                    style={{
                        backgroundImage: CGVLogo,
                    }}
                >
                    0
                </TheaterCard>
                <TheaterCard key={1}>1 </TheaterCard>
                <TheaterCard key={2}>2 </TheaterCard> */}
            </Carousel>
        </div>
    );
}

export default CardCarousel;

const TheaterCard = styled.div`
    /* justify-content: center;
    text-decoration: none;
    width: 250px;
    height: 250px;
    background: white;
    margin-right: 5px;
    margin-left: 5px;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-radius: 10px;

    */
    width: 250px;
    height: 250px;
    filter: blur(5px);
    @media screen and (max-width: 768px) {
        width: 150px;
        height: 150px;
    }
`;

const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

const TheaterName = styled.span`
    font-size: 18px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

/* const TheaterInfo = styled.div`
    display: flex;
    flex-direction: column;

    width: 250px;
    position: absolute;
    padding: 12px 16px;

    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);

    visibility: hidden;
    transition: visibility 500ms;

    ${TheaterCard}:hover & {
        visibility: visible;
    }
    &:hover {
        visibility: visible;
    }
`; */
