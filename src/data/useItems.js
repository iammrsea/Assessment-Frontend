import { fetchItems } from 'libs/api';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { error as notificationError } from 'helpers/notifications';

const useItems = (key, staleTime = 1000 * 20 * 60) => {
	const { data, error, isError, isLoading } = useQuery(key, fetchItems, { staleTime });

	useEffect(() => {
		if (isError) {
			notificationError(error);
		}
	}, [isError, error]);
	return { data, isLoading };
};

export default useItems;
