import client from './client';

const fetchItem = ({ queryKey }) => {
	const [_key, id] = queryKey;
	return client()
		.get(`/${_key}/` + id)
		.then((res) => {
			return res.data;
		});
};

export default fetchItem;
