import React from "react";
import styled from "styled-components";
import { Rate, Tabs } from "antd";
import {
    ReadOutlined,
    AuditOutlined,
    VideoCameraOutlined,
    CommentOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const InfoDetail = ({ details }) => {
    const rate = details.vote_average;

    return (
        <Container>
            <MainInfo>
                <Posterdiv>
                    <Poster
                        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                        alt={details.original_title}
                        title={details.original_title}
                    />
                </Posterdiv>
                <Titlediv>
                    <Title>{details.title}</Title>
                    <OriginalTitle>{details.original_title}</OriginalTitle>
                    <Release>{details.release_date}</Release>
                    <span>
                        <Rate
                            disabled
                            count={5}
                            allowHalf={true}
                            defaultValue={rate}
                        />
                        <span> {rate}</span>
                    </span>
                </Titlediv>
            </MainInfo>
            <Descriptions>
                <Tabs defaultActiveKey="2" centered={true} size="large">
                    <TabPane
                        tab={
                            <span>
                                <ReadOutlined />
                                Details
                            </span>
                        }
                        key="1"
                    >
                        Tab 1
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <AuditOutlined />
                                Cast
                            </span>
                        }
                        key="2"
                    >
                        Tab 2
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <VideoCameraOutlined />
                                Recommendations
                            </span>
                        }
                        key="3"
                    >
                        Tab 2
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <CommentOutlined />
                                Comment
                            </span>
                        }
                        key="4"
                    >
                        Tab 2
                    </TabPane>
                </Tabs>
            </Descriptions>
        </Container>
    );
};

export default InfoDetail;

const Container = styled.div`
    width: 90%;
    height: 1200px;
    margin: 0 auto;
    margin-top: -50px;
    border-radius: 15px;
    background: #ffffff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;
const Title = styled.h1`
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 38px;
    line-height: 1.23;
    margin-bottom: 0;
`;

const OriginalTitle = styled.h5`
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
`;

const Release = styled.h5`
    color: #6e3731;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
`;
const MainInfo = styled.div`
    background-color: #ed786a;
    width: 100%;
    height: 300px;
    display: inline-flex;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 15px;
`;

const Posterdiv = styled.div`
    margin-left: 24px;
    margin-right: 24px;
`;

const Titlediv = styled.div`
    align-self: center;
    margin-bottom: 10%;
`;

const Poster = styled.img`
    max-width: 200px;
    width: 100%;
    margin-top: -50px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;

const Descriptions = styled.div``;