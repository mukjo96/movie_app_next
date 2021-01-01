import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
	value: string;
	onClick: () => void;
};

const Button = ({ value, onClick }: ButtonProps) => {
	return <CustomButton onClick={onClick}>{value}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
	border: none;
	max-width: 320px;
	width: 100%;
	padding: 10px;
	border-radius: 30px;
	margin-bottom: 10px;
	font-size: 12px;
	color: black;
	text-align: center;
	background: #04aaff;
	color: white;
	margin-top: 10px;
	cursor: pointer;
	box-shadow: 5px 5px 10px #bfc2c6, -5px -5px 10px #ffffff;
`;
