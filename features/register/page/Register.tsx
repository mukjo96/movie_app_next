import React from "react";
import styled from "styled-components";
import RegisterForm from "@features/register/templates/RegisterForm";
import { IconLogo } from "@features/common/logo/Logo";

const Register = () => {
    return (
        <Container>
            <LoginLogo />
            <RegisterForm />
        </Container>
    );
};

export default Register;

const Container = styled.div`
    display: inline-flex;
    width: 24em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background-color: #eff3f7;
    padding: 20px;
    box-shadow: 15px 15px 30px #bfc2c6, -15px -15px 30px #ffffff;
    border-radius: 20px;
`;

const LoginLogo = styled(IconLogo)`
    width: 150px;
    height: 150px;
    margin-bottom: 50px;
`;
