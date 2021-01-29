import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import {
    ReadOutlined,
    AuditOutlined,
    VideoCameraOutlined,
    CommentOutlined,
} from "@ant-design/icons";
import Details from "./descriptions/Details";
import Cast from "./descriptions/Cast";
import Loading from "@features/common/Loading";
import Recommendations from "./descriptions/Recommendations";
import Comments from "./descriptions/Comments";
import { detailsTypes } from "@features/movieInfo/types/detailsTypes";
import { useWindowSize } from "./descriptions/getWindowSize";

const { TabPane } = Tabs;

const Descriptions = ({ details }: detailsTypes) => {
    const size = useWindowSize();
    return (
        <Container>
            <StyledTabs
                defaultActiveKey="1"
                centered={true}
                size={
                    size.width > 992
                        ? "large"
                        : size.width > 768
                        ? "default"
                        : "small"
                }
                tabBarGutter={size.width > 992 ? 48 : size.width > 768 ? 24 : 8}
            >
                <TabPane
                    tab={
                        <span>
                            <ReadOutlined />
                            <span className="tabTitle">상세 정보</span>
                        </span>
                    }
                    key="1"
                >
                    <Details details={details} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <AuditOutlined />
                            <span className="tabTitle">출연/제작</span>
                        </span>
                    }
                    key="2"
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
                    key="3"
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
                    key="4"
                >
                    <Comments />
                </TabPane>
            </StyledTabs>
        </Container>
    );
};

export default Descriptions;

const Container = styled.div`
    margin-top: 12px;
    background-color: white;
    border-radius: 0 0 15px 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16), 0 4px 8px rgba(0, 0, 0, 0.23);
    padding-bottom: 24px;
`;

const StyledTabs = styled(Tabs)`
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
