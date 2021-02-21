import moment from 'moment';
export { default as errorMessage } from './errorMessage';
export { default as useBreakpoint } from './useBreakpoint';
export { default as useMutation } from './useMutation';

export const serializeProduct = (product) => {
	return {
		...product,
		productName: product.product_name,
		productDescription: product.product_description,
		productVarieties: product.product_varieties,
		dateUploaded: moment(product.date_uploaded).format('ll'),
		dateEdited: product.date_edited,
	};
};
