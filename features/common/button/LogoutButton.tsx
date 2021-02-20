import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { firebaseClient } from "../../../firebase/firebaseClient";
import Link from "next/link";
import { useAuth } from "../../../firebase/auth";
import { LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components";

const LogoutButton = () => {
    const { user } = useAuth();
    return (
        <Container>
            {user ? (
                <LogoutOutlined
                    color={"#333333"}
                    height="16px"
                    style={{ cursor: "pointer", alignSelf: "center" }}
                    onClick={async () => {
                        await firebaseClient.auth().signOut();
                        window.location.href = "/";
                    }}
                />
            ) : (
                <Link href="/login">
                    <Login>Login</Login>
                </Link>
            )}
        </Container>
    );
};
export default LogoutButton;

const Container = styled.div`
    display: flex;
    align-self: center;
`;

const Login = styled.span`
    font-family: "Sansita Swashed", cursive;
    font-size: 15px;
    padding: 3px;
    color: #333333;
    align-self: center;
    cursor: pointer;
`;
