import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import moment from "moment";
import NavBar from "@features/home/components/navigation/NavBar";
import next from "next";

function MyApp({ Component, pageProps }) {
    moment.locale("ko");
    return (
        <>
            <Head>
                <title>Movie App</title>
                <link rel="shortcut icon" href="/image/favicon.ico" />
            </Head>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
