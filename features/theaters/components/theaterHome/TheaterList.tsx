import React from "react";
import styled from "styled-components";
import TheaterCard from "@features/theaters/components/theaterHome/TheaterCard";
import { Divider } from "antd";

const TheaterList = ({ theaters, activeTheater, activeLocation }) => {
    const selectedTheater =
        activeTheater === 4
            ? "전체"
            : activeTheater === 0
            ? "CGV"
            : activeTheater === 1
            ? "롯데시네마"
            : activeTheater === 2
            ? "메가박스"
            : "기타";

    return (
        <Container>
            {theaters &&
                theaters
                    .filter((cinemaf) => {
                        if (
                            selectedTheater === "전체" &&
                            activeLocation === "전체"
                        ) {
                            return true;
                        } else if (selectedTheater === "전체") {
                            return activeLocation === cinemaf.LOCATION;
                        } else if (activeLocation === "전체") {
                            return selectedTheater === cinemaf.THEATER_BRAND;
                        } else {
                            return (
                                selectedTheater === cinemaf.THEATER_BRAND &&
                                activeLocation === cinemaf.LOCATION
                            );
                        }
                    })
                    .map((cinema, index, array) => (
                        <div key={cinema.idx}>
                            {index == 0 ? (
                                <LocationDetail>
                                    {cinema.LOCATION_DETAIL}
                                </LocationDetail>
                            ) : cinema.LOCATION_DETAIL !==
                              array[index - 1].LOCATION_DETAIL ? (
                                <LocationDetail>
                                    {cinema.LOCATION_DETAIL}
                                </LocationDetail>
                            ) : null}

                            <TheaterCard theater={cinema} />
                        </div>
                    ))}
        </Container>
    );
};

export default TheaterList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const LocationDetail = styled(Divider)`
    span {
        font-size: 18px;
        color: rgba(0, 0, 0, 0.85);
        text-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    }
`;
