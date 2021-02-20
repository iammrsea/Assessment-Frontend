import { user } from './authUser';

const getUser = () => {
	const userData = user();
	if (!userData) return Promise.resolve(null);
	return Promise.resolve(userData);
};
export default getUser;
