const errorMessage = (error) => {
	const { response } = error;
	if (response && response.data) {
		const { errors } = response.data;
		console.log('error', error.response);
		if (errors) {
			return errors
				.map((error) => {
					let message = error.message;
					if (error.rule && error.rule === 'required') {
						message += `: ${error.field} is required`;
					}
					if (error.rule && error.rule === 'unique') {
						message += `: ${error.field} must be unique`;
					}
					return message;
				})
				.join(',');
		}
		return response.data.message;
	}
	return error.statusText;
};
export default errorMessage;
