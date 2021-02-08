import React, { Fragment } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Loading from "@features/common/Loading";

import useSWR from "swr";

const TheaterInfo = () => {
    const router = useRouter();
    const { theaterid } = router.query;

    const { data, error } = useSWR(
        `https://movieapp-737a9.firebaseio.com/Cinema/${
            Number(theaterid) - 1
        }.json`
    );

    if (!theaterid) return <div>no ID!</div>;
    if (error) return <div>failed to load</div>;
    if (!data)
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2em",
                }}
            >
                <Loading />
            </div>
        );

    return (
        <Fragment>
            <Details>{data.THEATER_NAME}</Details>
        </Fragment>
    );
};

export default TheaterInfo;

const Details = styled.div``;
