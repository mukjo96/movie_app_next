import React from "react";
import styled from "styled-components";

type TableDataProps = {
    props?: string;
    data?: number | string;
};

const dataPropsMapper = {
    rank: {
        title: "순위",
        parseData: (data) => data,
    },
    rankInten: {
        title: "변동",
        parseData: (data) => Math.sign(data),
    },
    movieNm: {
        title: "영화 제목",
        parseData: (data) => data,
    },
    audiAcc: {
        title: "관객수",
        parseData: (data) =>
            data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
};

const BoxOfficeList = ({ title, dataProps, datas }) => {
    console.log(dataProps, datas);
    return (
        <Container>
            <Header>{title}</Header>
            <Table>
                <TableHeader>
                    {dataProps.map((props) => (
                        <th className={props}>
                            {dataPropsMapper[props].title}
                        </th>
                    ))}
                </TableHeader>
                {datas.map((data) => (
                    <TableRow>
                        {dataProps.map((props) => (
                            <TableData
                                className={props}
                                data={data[props]}
                                props={props}
                            >
                                {dataPropsMapper[props].parseData(data[props])}
                            </TableData>
                        ))}
                    </TableRow>
                ))}
            </Table>
        </Container>
    );
};

export default BoxOfficeList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 30%;
`;

const Header = styled.h3`
    font-size: 1em;
    letter-spacing: 2px;
    margin: 0 0 1.25em;
    font-weight: 600;
    text-transform: uppercase;
    color: #888;
    text-align: center;
`;

const Table = styled.table`
    background-color: #f0f0f0;
    width: 100%;
    table-layout: fixed;
`;

const TableHeader = styled.tr`
    font-size: 10px;
    white-space: nowrap;
    .rank {
        width: 10%;
    }
    .rankInten {
        width: 10%;
    }
    .movieNm {
        width: 60%;
    }
    .audiAcc {
        width: 20%;
    }
`;

const TableRow = styled.tr`
    font-size: 10px;
    text-align: center;
    white-space: nowrap;
`;

const TableData = styled.td<TableDataProps>`
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) =>
        props.props == "rankInten"
            ? props.data < 0
                ? "red"
                : "green"
            : "black"};
`;
