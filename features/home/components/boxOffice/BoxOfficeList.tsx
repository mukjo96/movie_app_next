import Link from "next/link";
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
        parseData: (data) => <Link href={`/search?text=${data}`}>{data}</Link>,
    },
    audiAcc: {
        title: "관객수",
        parseData: (data) =>
            data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
};

const BoxOfficeList = ({ title, dataProps, datas }) => {
    return (
        <Container>
            <Header>{title}</Header>
            <Table>
                <TableHeader>
                    {dataProps.map((props, index) => (
                        <th key={index} className={props}>
                            {dataPropsMapper[props].title}
                        </th>
                    ))}
                </TableHeader>
                {datas.map((data) => (
                    <TableRow>
                        {dataProps.map((props, index) => (
                            <TableData
                                key={index}
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
    width: 100%;
    max-width: 100%;
`;

const Header = styled.h3`
    font-size: 1em;
    letter-spacing: 2px;
    margin: 0 0 1.25em;
    font-weight: 600;
    text-transform: uppercase;
    color: #575757;
    text-align: center;
`;

const Table = styled.table`
    background-color: #d6d6d6;
    width: 100%;
    table-layout: fixed;
    border-radius: 10px;
    box-shadow: 10px 10px 20px #d4d4d4, -10px -10px 20px #ffffff;
    padding: 8px;
`;

const TableHeader = styled.tr`
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
    th {
        padding: 5px;
        padding-right: 10px;
        padding-left: 10px;
    }
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
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
`;

const TableData = styled.td<TableDataProps>`
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    a {
        text-decoration: none;
        cursor: pointer;
        color: #333333;

        :hover {
            text-decoration: underline;
        }
    }

    color: ${(props) =>
        props.props == "rankInten"
            ? props.data < 0
                ? "red"
                : "green"
            : "black"};
`;
