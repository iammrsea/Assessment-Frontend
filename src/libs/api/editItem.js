import client from './client';

const editItem = ({ key, id, data }) => {
	return client()
		.put(`/${key}/` + id, data)
		.then((res) => res.data);
};
export default editItem;
