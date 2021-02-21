import axios from 'axios';
import { BASE_URL } from 'constantValues';

const client = () => {
	return axios.create({
		baseURL: BASE_URL,
	});
};
export default client;
