import Button from "@features/common/button/Button";
import Input from "@features/common/input/Input";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import {
    GithubLoginBtn,
    GoogleLoginBtn,
} from "@features/common/button/SocialLoginButton";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                required
                value={password}
                onChange={(value: string) => setPassword(value)}
            />
            <Button value="로그인" onClick={null} />
            <Link href="register">회원 가입</Link>
            <Button value="Google 로그인 하기" icon="google" onClick={null} />
            <Button value="Github 로그인 하기" icon="github" onClick={null} />
        </Container>
    );
};

export default LoginForm;

const Container = styled.div`
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
