import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import BoxOfficeList from "@features/home/components/boxOffice/BoxOfficeList";
import {
    getTodayBoxOffice,
    getLastWeekendBoxOffice,
} from "@features/home/api/boxOffice.api";
import Router from "next/router";

const boxofficeTypeMapper = {
    today: {
        title: `TODAY'S BOX OFFICE`,
        dataProps: ["rank", "rankInten", "movieNm", "audiAcc"],
    },
    lastWeekend: {
        title: `LAST WEEKEND'S BOX OFFICE`,
        dataProps: ["rank", "rankInten", "movieNm", "audiAcc"],
    },
    topRated: {
        title: `LAST WEEKEND'S BOX OFFICE`,
        dataProps: ["rank", "rankInten", "movieNm", "audiAcc"],
    },
};

const BoxOffice = () => {
    const [datas, setDatas] = useState({
        today: [],
        lastWeekend: [],
        topRated: [],
    });

    useEffect(() => {
        async function fetchMovies() {
            const today = await getTodayBoxOffice();
            const lastWeekend = await getLastWeekendBoxOffice();
            setDatas({
                today,
                lastWeekend,
                topRated: [],
            });
        }
        fetchMovies();
    }, []);

    return (
        <Container>
            <Header>
                <strong>박스 오피스</strong>를 확인하세요
            </Header>
            <ListWrapper>
                {Object.keys(boxofficeTypeMapper).map((type) => (
                    <BoxOfficeList
                        key={type}
                        title={boxofficeTypeMapper[type].title}
                        datas={datas[type]}
                        dataProps={boxofficeTypeMapper[type].dataProps}
                    />
                ))}
            </ListWrapper>
        </Container>
    );
};

export default BoxOffice;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4em 0;
`;

const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`;

const Header = styled.h2`
    font-size: 1.65em;
    font-weight: 400;
    letter-spacing: 4px;
    color: #888;
    strong {
        font-weight: 600;
        color: #666;
    }
`;
