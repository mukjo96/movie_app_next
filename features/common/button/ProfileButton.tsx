import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../firebase/auth";
import { Avatar, Image } from "antd";
import { UserOutlined, QuestionOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ProfileButton = () => {
    const { user } = useAuth();
    return (
        <Container>
            {user ? (
                user.photoURL ? (
                    <span>
                        <Avatar src={user.photoURL} /> {user.displayName}
                    </span>
                ) : (
                    <span>
                        <Avatar icon={<UserOutlined />} />
                        {user.displayName}
                    </span>
                )
            ) : (
                <Avatar icon={<QuestionOutlined />} />
            )}
        </Container>
    );
};

export default ProfileButton;

const Container = styled.div`
    display: flex;
    align-self: center;
`;
