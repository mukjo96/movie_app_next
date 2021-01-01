import React from 'react';
import styled from 'styled-components';
import LoginForm from '@features/login/templates/LoginForm';
import { IconLogo } from '@features/common/logo/Logo';

const Login = () => {
	return (
		<Container>
			<LoginLogo />
			<LoginForm />
		</Container>
	);
};

export default Login;

const Container = styled.div`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	background-color: #eff3f7;
	padding: 20px;
	box-shadow: 15px 15px 30px #bfc2c6, -15px -15px 30px #ffffff;
	border-radius: 20px;
`;

const LoginLogo = styled(IconLogo)`
	width: 150px;
	height: 150px;
	margin-bottom: 50px;
`;
