import Button from "@features/common/button/Button";
import Input from "@features/common/input/Input";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { firebaseClient } from "../../../firebase/firebaseClient";

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onRegister = async () => {
        try {
            await firebaseClient
                .auth()
                .createUserWithEmailAndPassword(email, password);
            window.location.href = "/";
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container>
            <Input
                name="email"
                placeholder="이메일"
                required
                value={email}
                onChange={(value: string) => setEmail(value)}
            />
            <Input
                name="password"
                placeholder="패스워드"
                type="password"
                required
                value={password}
                onChange={(value: string) => setPassword(value)}
            />
            <Button value="회원가입" type="submit" onClick={onRegister} />
            <Link href="/login">로그인하러 가기</Link>
        </Container>
    );
};

export default RegisterForm;

const Container = styled.div`
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
