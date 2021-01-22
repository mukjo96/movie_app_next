import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import moment from "moment";
import NavBar from "@features/home/components/navigation/NavBar";
import { AuthProvider } from "../firebase/auth";

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
        </AuthProvider>
    );
}

export default MyApp;
