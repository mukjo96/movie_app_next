import Button from "@features/common/button/Button";
import Input from "@features/common/input/Input";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { firebaseClient } from "../../../firebase/firebaseClient";
import { useRouter } from "next/router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const onLogin = async () => {
        try {
            await firebaseClient
                .auth()
                .signInWithEmailAndPassword(email, password);
            router.push("/");
        } catch (error) {
            alert(error.message);
        }
    };

    const onGoogleLogin = async () => {
        const provider = new firebaseClient.auth.GoogleAuthProvider();
        await firebaseClient.auth().signInWithPopup(provider);
        router.push("/");
    };
    const onGithubLogin = async () => {
        const provider = new firebaseClient.auth.GithubAuthProvider();
        await firebaseClient.auth().signInWithPopup(provider);
        router.push("/");
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
            <Button value="로그인" type="submit" onClick={onLogin} />

            <Link href="register">회원 가입</Link>
            <Button
                value="Google 로그인 하기"
                icon="google"
                onClick={onGoogleLogin}
            />
            <Button
                value="Github 로그인 하기"
                icon="github"
                onClick={onGithubLogin}
            />
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
