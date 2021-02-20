import client from './client';

const login = ({ email, password }) => {
	return client()
		.post('/auth/login', { email, password })
		.then((res) => {
			return res.data;
		});
};
export default login;
