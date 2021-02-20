import axios from 'axios';
import { BASE_URL } from 'constantValues';
import { user } from './authUser';

const client = () => {
	const authUserData = user();
	const token = authUserData ? authUserData.token : '';
	return axios.create({
		baseURL: BASE_URL,
		headers: {
			authorization: `bearer ${token}`,
		},
	});
};
export default client;
