import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../firebase/auth";
import { Avatar, Image } from "antd";
import { UserOutlined, QuestionOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";

const ProfileButton = () => {
    const { user } = useAuth();
    return (
        <Container>
            <Link href="/login">
                {user ? (
                    user.photoURL ? (
                        <div>
                            <Avatar src={user.photoURL} />
                            <Nickname>{user.displayName}</Nickname>
                        </div>
                    ) : (
                        <div>
                            <Avatar icon={<UserOutlined />} />
                            <Nickname>{user.displayName}</Nickname>
                        </div>
                    )
                ) : (
                    <Avatar icon={<QuestionOutlined />} />
                )}
            </Link>
        </Container>
    );
};

export default ProfileButton;

const Container = styled.div`
    display: flex;
    cursor: pointer;
    align-self: center;
`;

const Nickname = styled.span`
    margin-left: 4px;
`;
