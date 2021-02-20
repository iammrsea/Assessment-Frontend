import { fetchItem } from 'libs/api';
import { useQuery, useQueryClient } from 'react-query';
import { useEffect } from 'react';
import { error as notificationError } from 'helpers/notifications';

const useItem = (key, id) => {
	const queryClient = useQueryClient();
	const { data, error, isError, isLoading } = useQuery([key, id], fetchItem, {
		initialData: () => {
			const items = queryClient.getQueryData(key) || [];
			if (key === 'plans' && items) {
				return items.find((item) => item.id === id);
			}
			if (key === 'posts' && items && items.data && items.data.posts) {
				return items.data.posts.find((item) => item.id === id);
			}
		},
	});
	useEffect(() => {
		if (isError) {
			notificationError(error);
		}
	}, [isError, error]);
	return { data, isLoading };
};

export default useItem;
