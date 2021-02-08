import React, { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import CardCarousel from "@features/theaters/components/CardCarousel";
import LocationRadio from "@features/theaters/components/LocationRadio";
import TheaterList from "@features/theaters/components/TheaterList";
import Loading from "@features/common/Loading";

const Theaters = () => {
    const [activeTheater, setActiveTheater] = useState(4);
    const [activeLocation, setActiveLocation] = useState("");

    const { data, error } = useSWR(
        `https://movieapp-737a9.firebaseio.com/Cinema.json`
    );

    if (error) return <div>failed to load</div>;
    if (!data)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2em",
                }}
            >
                <Loading />
            </div>
        );
    return (
        <Container>
            <CardCarousel
                activeSlide={activeTheater}
                setActiveSlide={setActiveTheater}
            />

            <LocationRadio
                activeLocation={activeLocation}
                setActiveLocation={setActiveLocation}
            />
            {activeLocation !== "" ? (
                <TheaterList
                    theaters={data}
                    activeLocation={activeLocation}
                    activeTheater={activeTheater}
                />
            ) : (
                <Block>지역을 선택하세요.</Block>
            )}
        </Container>
    );
};

export default Theaters;

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const Block = styled.div`
    text-align: center;

    height: 30vh;
`;
