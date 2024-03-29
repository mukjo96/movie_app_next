import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import {
    AuditOutlined,
    VideoCameraOutlined,
    CommentOutlined,
} from "@ant-design/icons";
import Cast from "./descriptions/Cast";
import Recommendations from "./descriptions/Recommendations";
import MovieComments from "./descriptions/MovieComments";

const { TabPane } = Tabs;

const Descriptions = () => {
    return (
        <Container>
            <StyledTabs defaultActiveKey="1" centered={true}>
                <TabPane
                    tab={
                        <span>
                            <AuditOutlined />
                            <span className="tabTitle">출연/제작</span>
                        </span>
                    }
                    key="1"
                >
                    <Cast />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <VideoCameraOutlined />
                            <span className="tabTitle">추천 영화</span>
                        </span>
                    }
                    key="2"
                >
                    <Recommendations />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <CommentOutlined />
                            <span className="tabTitle">댓글</span>
                        </span>
                    }
                    key="3"
                >
                    <MovieComments />
                </TabPane>
            </StyledTabs>
        </Container>
    );
};

export default Descriptions;

const Container = styled.div`
    border-radius: 0 0 15px 15px;
    padding-bottom: 24px;
    border-radius: 15px;
`;

const StyledTabs = styled(Tabs)`
    .ant-tabs-nav-list {
        width: 100%;
        justify-content: space-evenly;
    }
    .ant-tabs-tab {
        font-size: 16px;
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        .ant-tabs-nav-list {
            width: 100%;
            justify-content: space-evenly;
        }
        .anticon {
            margin-right: 0;
            margin-left: 0;
            padding: 0 12px;
        }
        .tabTitle {
            display: none;
        }
    }
`;
