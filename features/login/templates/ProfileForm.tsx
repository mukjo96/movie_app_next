import Button from "@features/common/button/Button";
import Input from "@features/common/input/Input";
import React, { useState } from "react";
import styled from "styled-components";

import { Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { useRouter } from "next/router";
import { useAuth } from "../../../firebase/auth";
import Link from "next/link";

const ProfileForm = () => {
    const { user } = useAuth();
    const router = useRouter();
    const [newDisplayName, setNewDisplayName] = useState("");
    const [newPhotoUrl, setNewPhotoUrl] = useState("");

    const onSubmit = async () => {
        try {
            if (user.displayName !== newDisplayName) {
                console.log("changing..");
                await user.updateProfile({
                    displayName: newDisplayName,
                });
                setNewDisplayName(user.displayName);
                user.reload();
                router.push("#");
            }
            console.log("done");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container>
            {user.photoURL ? (
                <div>
                    <Avatar src={user.photoURL} />
                    <Nickname>{user.displayName}</Nickname>
                </div>
            ) : (
                <div>
                    <Avatar icon={<UserOutlined />} />
                    <Nickname>{user.displayName}</Nickname>
                </div>
            )}
            <Smalltitle>닉네임 변경</Smalltitle>
            <Input
                name="nickname"
                placeholder="닉네임을 입력하세요..."
                required
                value={newDisplayName}
                onChange={(value: string) => setNewDisplayName(value)}
            />
            <Button value="변경" type="submit" onClick={onSubmit} />
            <HomeButton>
                <Link href="/">홈으로 가기</Link>
            </HomeButton>
        </Container>
    );
};

export default ProfileForm;

const Container = styled.div`
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Smalltitle = styled.h5`
    margin-top: 16px;
    font-size: 12px;
    color: #a0a0a0;
    margin-bottom: 16px;
    margin-left: 10px;
    width: 100%;
`;

const HomeButton = styled.div`
    width: 100%;
    font-size: 12px;
    text-align: center;
`;

const Nickname = styled.span`
    margin-left: 4px;
`;
