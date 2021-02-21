import { Row, Col, Modal, Input, Button, message, Spin } from 'antd';
import { useReducer, useState } from 'react';
import { ButtonsContainer, AddButton } from 'components/buttons';
import { useHistory } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useMutation } from 'helpers';
import { editItem } from 'libs/api';
import { ProductVarietyView, ProductVariety } from './components';
import productReducer from './api/productReducer';
import { ADD_EDIT_PRODUCT_DESCRIPTION, ADD_EDIT_PRODUCT_NAME } from './api/actions';

const Product = () => {
	const {
		location: {
			state: { product: selectedProduct },
		},
	} = useHistory();
	const [product, dispatch] = useReducer(productReducer, selectedProduct);
	const [showAddVariety, setShowAddVariety] = useState(false);

	const { mutate, isLoading } = useMutation(editItem);

	const queryClient = useQueryClient();

	const handleOnInputChange = (e) => {
		const target = e.target;
		const id = target.id;
		const value = target.value;

		if (id === 'name') {
			const action = { type: ADD_EDIT_PRODUCT_NAME, payload: { productName: value } };
			return dispatch(action);
		}
		if (id === 'description') {
			const desAction = { type: ADD_EDIT_PRODUCT_DESCRIPTION, payload: { productDescription: value } };
			return dispatch(desAction);
		}
	};

	const toggleShowAddVariety = () => {
		setShowAddVariety((prevState) => !prevState);
	};
	const handleOnSaveChangesClicked = () => {
		mutate(
			{ key: 'products', data: product, id: product.id },
			{
				onSuccess: (res) => {
					message.success(res.message);
					queryClient.invalidateQueries('products');
				},
			}
		);
	};
	return (
		<div className="product-view">
			<ButtonsContainer>
				<AddButton handleOnClick={handleOnSaveChangesClicked} disabled={isLoading} text="Save Changes" />
			</ButtonsContainer>
			<Spin spinning={isLoading} tip="saving changes...">
				<Row gutter={16}>
					<Col sm={24} md={12}>
						<Input
							onChange={handleOnInputChange}
							placeholder="Enter product name"
							id="name"
							value={product.productName}
						/>
					</Col>
					<Col sm={24} md={12}>
						<Input
							onChange={handleOnInputChange}
							placeholder="Enter description"
							id="description"
							value={product.productDescription}
						/>
					</Col>
				</Row>
				<div className="product-variety-list">
					<p>Product Varieties</p>

					<Button onClick={toggleShowAddVariety} color="green">
						Add new variety
					</Button>
				</div>
				<Row>
					{product.productVarieties
						? product.productVarieties.map((variety, i) => (
								<Col key={i}>
									<ProductVarietyView dispatch={dispatch} variety={variety} />
								</Col>
						  ))
						: null}
				</Row>
			</Spin>
			<Modal title="Add new product variety" visible={showAddVariety} onCancel={toggleShowAddVariety} footer={[]}>
				<ProductVariety cancelDialog={toggleShowAddVariety} dispatch={dispatch} />
			</Modal>
		</div>
	);
};

export default Product;
