import { SHOPJESE_AUTH_USER } from 'constantValues';

export const user = () => {
	const user = localStorage.getItem(SHOPJESE_AUTH_USER);
	return user ? JSON.parse(user) : '';
};
export const setUser = (user) => {
	localStorage.setItem(SHOPJESE_AUTH_USER, JSON.stringify(user));
};
export const removeUser = () => {
	localStorage.removeItem(SHOPJESE_AUTH_USER);
};
