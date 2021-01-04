import React, { Fragment } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: "8em" }} spin />;

const Loading = () => {
    return (
        <Fragment>
            <Spin style={{ marginTop: "5em" }} indicator={antIcon} />
        </Fragment>
    );
};

export default Loading;
