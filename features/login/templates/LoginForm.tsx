import Button from '@features/common/button/Button';
import Input from '@features/common/input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container>
			<Input
				name='email'
				placeholder='이메일'
				required
				value={email}
				onChange={(value: string) => setEmail(value)}
			/>
			<Input
				name='password'
				placeholder='패스워드'
				required
				value={password}
				onChange={(value: string) => setPassword(value)}
			/>
			<Button value='로그인' onClick={null} />
			<Link href='register'>회원 가입</Link>
		</Container>
	);
};

export default LoginForm;

const Container = styled.div`
	width: 100%;
	max-width: 320px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
