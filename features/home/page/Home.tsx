import React, { Fragment } from 'react';
import styled from 'styled-components';
import NavBar from '@features/home/components/navigation/NavBar';
import Header from '@features/home/components/header/Header';
import BoxOffice from '@features/home/components/boxOffice/BoxOffice';

const Home = () => {
	return (
		<Fragment>
			<NavBar />
			<Header />
			<BoxOffice />
		</Fragment>
	);
};

export default Home;
