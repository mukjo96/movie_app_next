import React from "react";
import "../styles/globals.css";
import moment from "moment";
import NavBar from "@features/home/components/navigation/NavBar";

function MyApp({ Component, pageProps }) {
    moment.locale("ko");
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
