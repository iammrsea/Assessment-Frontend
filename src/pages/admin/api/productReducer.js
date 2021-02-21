import {
	ADD_EDIT_PRODUCT_DESCRIPTION,
	ADD_EDIT_PRODUCT_NAME,
	ADD_PRODUCT_VARIETY,
	EDIT_PRODUCT_VARIETY,
	REMOVE_PRODUCT_VARIETY,
} from './actions';

const productReducer = (state = {}, action) => {
	const { type, payload } = action;
	const { productVariety } = payload;
	const { productVarieties } = state;
	switch (type) {
		case ADD_EDIT_PRODUCT_NAME:
			return { ...state, productName: payload.productName };
		case ADD_EDIT_PRODUCT_DESCRIPTION:
			return { ...state, productDescription: payload.productDescription };
		case ADD_PRODUCT_VARIETY:
			const updatedProductVarieties = productVarieties ? [...productVarieties, productVariety] : [productVariety];
			return { ...state, productVarieties: updatedProductVarieties };
		case EDIT_PRODUCT_VARIETY:
			const variety = productVarieties.find((variety) => variety.id === productVariety.id);
			if (!variety) return { ...state, productVarieties: [...productVarieties, productVariety] };
			const varieties = productVarieties.filter((variety) => variety.id !== productVariety.id);
			return { ...state, productVarieties: [...varieties, productVariety] };
		case REMOVE_PRODUCT_VARIETY:
			const filtered = productVarieties.filter((variety) => variety.id !== productVariety.id);
			return { ...state, productVarieties: [...filtered] };
		default:
			return state;
	}
};
export default productReducer;
