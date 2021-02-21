import { useState } from 'react';
import { Modal, Input, Button, Row, Col, Image, message } from 'antd';
import ProductVariety from './ProductVariety';
import { REMOVE_PRODUCT_VARIETY } from '../api/actions';

const ProductVarietyView = ({ variety = {}, dispatch }) => {
	const [showEdit, setShowEdit] = useState(false);

	const toggleShowEdit = () => {
		setShowEdit((prevState) => !prevState);
	};
	const removeProductVariety = () => {
		const action = { type: REMOVE_PRODUCT_VARIETY, payload: { productVariety: variety } };
		dispatch(action);
		message.info('Remember to click save changes button to persist your changes');
	};
	return (
		<div className="product-variety-view">
			<Row gutter={16}>
				<Col sm={24} md={8}>
					Price
					<Input disabled value={variety.price} />
				</Col>
				<Col sm={24} md={8}>
					Color
					<Input disabled value={variety.color} />
				</Col>
				<Col sm={24} md={8}>
					Size <Input disabled value={variety.size} />
				</Col>
			</Row>
			<Row gutter={16}>
				{variety.images && variety.images.length
					? variety.images.map((image, i) => (
							<Col key={i} sm={24} md={12}>
								{/* <img src={image} alt="" /> */}
								<Image src={image} />
							</Col>
					  ))
					: null}
			</Row>
			<Row gutter={16} className="actions">
				<Col sm={12}>
					<Button danger onClick={removeProductVariety}>
						Remove
					</Button>
				</Col>
				<Col sm={12}>
					<Button onClick={toggleShowEdit} type="primary">
						Edit
					</Button>
				</Col>
			</Row>
			<Modal title="Edit product variety" visible={showEdit} onCancel={toggleShowEdit} footer={[]}>
				<ProductVariety cancelDialog={toggleShowEdit} dispatch={dispatch} productVariety={variety} />
			</Modal>
		</div>
	);
};

export default ProductVarietyView;
