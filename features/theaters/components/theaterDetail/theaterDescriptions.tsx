import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import {
    AuditOutlined,
    VideoCameraOutlined,
    CommentOutlined,
} from "@ant-design/icons";
import TheaterComments from "./theaterComments";

const { TabPane } = Tabs;

const TheaterDescriptions = () => {
    return (
        <Container>
            <StyledTabs defaultActiveKey="1" centered={true}>
                <TabPane
                    tab={
                        <span>
                            <CommentOutlined />
                            <span className="tabTitle">댓글</span>
                        </span>
                    }
                    key="1"
                >
                    <TheaterComments />
                </TabPane>
            </StyledTabs>
        </Container>
    );
};

export default TheaterDescriptions;

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
