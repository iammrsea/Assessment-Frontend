import client from './client';

const logout = (key) => {
	return client()
		.delete(`/${key}`)
		.then((res) => res.data);
};

export default logout;
