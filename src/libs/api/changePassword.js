import client from './client';

const changePassword = ({ key, data }) => {
	return client()
		.put(`/${key}`, data)
		.then((res) => res.data);
};

export default changePassword;
