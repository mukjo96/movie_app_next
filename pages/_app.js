import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import moment from "moment";
import NavBar from "@features/home/components/navigation/NavBar";
import { AuthProvider } from "../firebase/auth";
import Foot from "@features/common/Footer/Foot";

function MyApp({ Component, pageProps }) {
    moment.locale("ko");
    return (
        <AuthProvider>
            <Head>
                <title>Movie App</title>
                <link rel="shortcut icon" href="/image/favicon.ico" />
            </Head>
            <NavBar />
            <Component {...pageProps} />
            <Foot />
        </AuthProvider>
    );
}

export default MyApp;
