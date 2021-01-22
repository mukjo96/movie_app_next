import React from "react";
import styled from "styled-components";
import { useAuth } from "../firebase/auth";
import Register from "@features/register/page/Register";

const RegisterPage = (_props: any) => {
    const { user } = useAuth();

    return (
        <Page>{user ? <p>이미 로그인되어 있습니다.</p> : <Register />}</Page>
    );
};

export default RegisterPage;

const Page = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
