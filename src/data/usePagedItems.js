import { fetchPagedItems } from 'libs/api';
import { useQuery } from 'react-query';

const usePagedItems = (key, page, limit) => {
	return useQuery([key, { page, limit }], fetchPagedItems, { staleTime: 1000 * 5 * 60, keepPreviousData: true });
};

export default usePagedItems;
