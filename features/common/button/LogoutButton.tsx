import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
	return (
		<FontAwesomeIcon
			icon={faSignOutAlt}
			color={'#444'}
			size='lg'
			style={{ cursor: 'pointer' }}
		/>
	);
};

export default LogoutButton;
