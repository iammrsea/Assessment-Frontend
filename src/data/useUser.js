import { useQuery } from 'react-query';
import { getUser } from 'libs/api';

const useUser = () => {
	const info = useQuery('user', getUser);
	return info;
};
export default useUser;
