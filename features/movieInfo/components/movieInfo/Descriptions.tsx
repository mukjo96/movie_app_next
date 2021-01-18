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
            <Tabs
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
                            상세 정보
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
                            출연/제작
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
                            추천 영화
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
                            댓글
                        </span>
                    }
                    key="4"
                >
                    <Comments />
                </TabPane>
            </Tabs>
        </Container>
    );
};

export default Descriptions;

const Container = styled.div``;
