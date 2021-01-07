import React, { Fragment } from "react";
import styled from "styled-components";
import { Tabs } from "antd";
import {
    ReadOutlined,
    AuditOutlined,
    VideoCameraOutlined,
    CommentOutlined,
} from "@ant-design/icons";
import Details from "./descriptions/Details";

const { TabPane } = Tabs;

const Descriptions = ({ details }) => {
    return (
        <Container>
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
                    <Details details={details} />
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
        </Container>
    );
};

export default Descriptions;

const Container = styled.div``;
