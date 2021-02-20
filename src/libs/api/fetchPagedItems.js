import client from './client';

const fetchPagedItems = ({ queryKey }) => {
	const [_key, { page = 1, limit = 5 }] = queryKey;
	return client()
		.get(`/${_key}/?page=${page}&limit=${limit}`)
		.then((res) => {
			console.log(res);
			return res.data;
		});
};

export default fetchPagedItems;
