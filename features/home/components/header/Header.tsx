import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Title>MOVIE APP</Title>
            <Description>
                영화 정보와 영화관 상세 리뷰를 확인할 수 있습니다.
            </Description>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #d6d6d6;
`;

const Title = styled.a`
    font-family: Arvo;
    font-weight: 700;
    color: #333333;
    text-shadow: 0.05em 0.075em 0 rgba(0, 0, 0, 0.1);
    font-size: 3em;
    letter-spacing: 13px;
    text-decoration: none;
    text-align: center;
`;

const Description = styled.p`
    margin: 34px 0 0 0;
    font-weight: 400;
    color: #575757;
    margin: 2.5em 0 0;
    letter-spacing: 3px;
    text-align: center;
`;
