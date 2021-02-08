import React from "react";
import { Radio } from "antd";
import styled from "styled-components";

const locationList = [
    "전체",
    "서울",
    "부산",
    "경기/인천",
    "충청/대전",
    "경북/대구",
    "경남/울산",
    "전라/광주",
    "강원/제주",
];

const LocationRadio = ({ activeLocation, setActiveLocation }) => {
    return (
        <Container>
            <StyledRadioGroup
                defaultValue={activeLocation}
                buttonStyle="solid"
                onChange={(e) => {
                    setActiveLocation(e.target.value);
                }}
                style={{
                    textAlign: "center",
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {locationList.map((name, index) => (
                    <StyledRadioButton key={index} value={name}>
                        {name}
                    </StyledRadioButton>
                ))}
            </StyledRadioGroup>
        </Container>
    );
};

export default LocationRadio;

const Container = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    padding: 0 10%;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

const StyledRadioGroup = styled(Radio.Group)`
    text-align: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .ant-radio-button-wrapper-checked {
        border-color: #333333 !important;
        background-color: #333333 !important;

        ::before {
            background-color: #333333 !important;
        }
    }

    .ant-radio-button-wrapper:hover {
        color: #f9f9f9;
        background-color: #333333;
    }
`;

const StyledRadioButton = styled(Radio.Button)`
    flex-grow: 1;

    .ant-radio-button-checked {
        background: #333333;
        border-color: #333333;

        ::before {
            background-color: #333333 !important;
        }
    }
`;
