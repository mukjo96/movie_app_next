import React from "react";
import Login from "@features/login/page/Login";
import styled from "styled-components";
import { useAuth } from "../firebase/auth";
import Profile from "@features/login/page/Profile";

const LoginPage = (_props: any) => {
    const { user } = useAuth();

    return <Page>{user ? <Profile /> : <Login />}</Page>;
};

export default LoginPage;

const Page = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
