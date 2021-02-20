import client from './client';

const saveItem = ({ key, data }) => {
	return client()
		.post(`/${key}`, data)
		.then((res) => res.data);
};

export default saveItem;
