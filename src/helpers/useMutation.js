import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { error as notificationError } from 'helpers/notifications';

const useCustomMutation = (mutateFunction) => {
	const { mutate, isError, error, isLoading } = useMutation(mutateFunction);

	useEffect(() => {
		
		if (isError) {
			notificationError(error);
			console.log('error', error.response);
		}
	}, [isError, error]);
	return { mutate, isLoading };
};
export default useCustomMutation;
