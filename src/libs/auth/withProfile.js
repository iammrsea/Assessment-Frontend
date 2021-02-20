import { Redirect } from 'react-router-dom';
import React from 'react';
import { user } from 'libs/api/authUser';

const withAuth = (Component) => {
	const authUser = user();
	if (authUser) {
		return <Component />;
	}
	return <Redirect to="/login" />;
};

export default withAuth;
