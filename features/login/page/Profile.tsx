import React from "react";
import styled from "styled-components";
import { useAuth } from "../../../firebase/auth";

const Profile = () => {
    const { user } = useAuth();
    return (
        <Container>
            <h1>{user.uid}</h1>
        </Container>
    );
};

export default Profile;

const Container = styled.div``;
