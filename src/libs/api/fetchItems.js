import client from './client';

const fetchItems = ({ queryKey }) => {
	return client()
		.get(`/${queryKey}`)
		.then((res) => {
			// console.log('res', res);
			return res.data;
		});
};
export default fetchItems;
