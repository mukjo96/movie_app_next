import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {
    CaretUpOutlined,
    CaretDownOutlined,
    MinusOutlined,
} from "@ant-design/icons";

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
        parseData: (data) =>
            Math.sign(data) > 0 ? (
                <a>
                    <CaretUpOutlined />
                    {Math.sign(data)}
                </a>
            ) : Math.sign(data) < 0 ? (
                <a>
                    <CaretDownOutlined />
                    {-Math.sign(data)}
                </a>
            ) : (
                <MinusOutlined />
            ),
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
                <thead>
                    <TableHeader>
                        {dataProps.map((props: string, index: number) => (
                            <th key={index} className={props}>
                                {dataPropsMapper[props].title}
                            </th>
                        ))}
                    </TableHeader>
                </thead>
                <tbody>
                    {datas.map((data: number | string, index: number) => (
                        <TableRow key={index}>
                            {console.log(data[index])}
                            {dataProps.map((props: string, index: number) => (
                                <TableData
                                    key={index}
                                    className={props}
                                    data={data[props]}
                                    props={props}
                                >
                                    {dataPropsMapper[props].parseData(
                                        data[props]
                                    )}
                                </TableData>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
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
    font-size: 16px;
    letter-spacing: 2px;
    margin: 0 0 1.25em;
    font-weight: 600;
    text-transform: uppercase;
    color: #575757;
    text-align: center;
`;

const Table = styled.table`
    border-radius: 10px 10px 0 0;
    background-color: #ffffff;
    width: 100%;
    table-layout: fixed;
    box-shadow: 10px 10px 20px #d4d4d4, -10px -10px 20px #ffffff;
    padding: 8px;
`;

const TableHeader = styled.tr`
    font-size: 12px;
    white-space: nowrap;
    text-align: center;
    background-color: #333333;
    color: #f9f9f9;
    text-align: center;

    th {
        /* padding: 5px;
        padding-right: 10px;
        padding-left: 10px; */
        padding: 1vh 1vw;
        text-align: center;
    }
    .rank {
        width: 10%;
        border-radius: 10px 0 0 0;
    }
    .rankInten {
        width: 10%;
    }
    .movieNm {
        width: 55%;
    }
    .audiAcc {
        width: 25%;
        border-radius: 0 10px 0 0;
    }

    @media screen and (min-width: 1280px) {
        th {
            padding: 1vh 12px;
        }
    }
`;

const TableRow = styled.tr`
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    color: #f9f9f9;
    text-align: center;
    border-bottom: 1px thin #d6d6d6;

    :nth-of-type(even) {
        background-color: #f9f9f9;
    }

    :last-of-type {
        border-bottom: 2px solid #333333;
    }

    :hover {
        background-color: #d6d6d6;
        cursor: pointer;
    }
`;

const TableData = styled.td<TableDataProps>`
    /* padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis; */
    padding: 12px 8px;
    a {
        text-decoration: none;
        cursor: pointer;
        color: ${(props) =>
            props.props == "rankInten"
                ? props.data < 0
                    ? "#ff2929"
                    : props.data > 0
                    ? "#48b80f"
                    : "#333333"
                : "#333333"};

        :hover {
            text-decoration: underline;
        }
    }
    color: #333333;
`;
