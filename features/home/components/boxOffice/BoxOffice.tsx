import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import BoxOfficeList from "@features/home/components/boxOffice/BoxOfficeList";
import {
    getTodayBoxOffice,
    getLastWeekendBoxOffice,
} from "@features/home/api/boxOffice.api";
import { Col, Row } from "antd";

const boxofficeTypeMapper = {
    today: {
        title: `TODAY'S BOX OFFICE`,
        dataProps: ["rank", "rankInten", "movieNm", "audiAcc"],
    },
    lastWeekend: {
        title: `LAST WEEKEND'S BOX OFFICE`,
        dataProps: ["rank", "rankInten", "movieNm", "audiAcc"],
    },
};

const BoxOffice = () => {
    const [datas, setDatas] = useState({
        today: [],
        lastWeekend: [],
    });

    useEffect(() => {
        async function fetchMovies() {
            const today = await getTodayBoxOffice();
            const lastWeekend = await getLastWeekendBoxOffice();

            setDatas({
                today,
                lastWeekend,
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
                <Row justify="space-around">
                    {Object.keys(boxofficeTypeMapper).map((type) => (
                        <StyledCol
                            key={type}
                            sm={{ span: 24 }}
                            md={{ span: 9 }}
                        >
                            <BoxOfficeList
                                key={type}
                                title={boxofficeTypeMapper[type].title}
                                datas={datas[type]}
                                dataProps={boxofficeTypeMapper[type].dataProps}
                            />
                        </StyledCol>
                    ))}
                </Row>
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
`;

const StyledCol = styled(Col)`
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
        margin-right: 1vw;
        margin-left: 1vw;
    }
`;

const Header = styled.h2`
    font-size: 1.65em;
    font-weight: 400;
    letter-spacing: 4px;
    color: #a0a0a0;
    strong {
        font-weight: 600;
        color: #575757;
    }
    margin-bottom: 2rem;
`;
