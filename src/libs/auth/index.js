import { Redirect } from 'react-router-dom';
import React from 'react';
import { user as getUser } from 'libs/api/authUser';

export const withAuth = (Component) => {
	const authUser = getUser();
	if (authUser && authUser.token) {
		return <Component />;
	}
	return <Redirect to="/login" />;
};

export const withAdminAuth = (Component) => {
	const authUser = getUser();
	if (authUser && authUser.token && authUser.role === 'admin') {
		return Component;
	}
	return <Redirect to="/login" />;
};
