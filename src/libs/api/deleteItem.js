import client from './client';

const deleteItem = ({ key, id }) => {
	return client()
		.delete(`/${key}/` + id)
		.then((res) => res.data);
};
export default deleteItem;
