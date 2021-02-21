import { useRef, useState } from 'react';
import { Spin, Input, Button, Row, Col, message, Image } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { saveItem } from 'libs/api';
import { useMutation } from 'helpers';
import { EDIT_PRODUCT_VARIETY, ADD_PRODUCT_VARIETY } from '../api/actions';

const ProductVarieties = ({ productVariety = {}, dispatch, cancelDialog }) => {
	const [variety, setVariety] = useState(productVariety);
	const [, setFile] = useState(null);

	const { mutate, isLoading: uploading } = useMutation(saveItem);

	const inputRef = useRef(null);

	const handleOnClick = () => {
		inputRef.current.click();
	};

	console.log('variety', variety);
	const handleOnAddClicked = () => {
		dispatch({ type: ADD_PRODUCT_VARIETY, payload: { productVariety: variety } });
		cancelDialog && cancelDialog();
		message.info('Remember to click save changes button to persist your changes');
	};

	const handleOnOkClicked = () => {
		dispatch({ type: EDIT_PRODUCT_VARIETY, payload: { productVariety: variety } });
		cancelDialog && cancelDialog();
		message.info('Remember to click save changes button to persist your changes');
	};

	const handleInputChange = (e) => {
		const target = e.target;
		setVariety((prevState) => {
			return { ...prevState, [target.id]: target.value };
		});
	};
	console.log('variety', variety);
	const handleChange = (e) => {
		const img = e.target.files[0];
		setFile(img);
		const formData = new FormData();
		formData.append('image', img);
		mutate(
			{ key: 'images', data: formData },
			{
				onSuccess: (res) => {
					setVariety((prevState) => {
						const { images } = prevState;
						const {
							data: { image_url },
						} = res;
						if (images) {
							return { ...prevState, images: [...images, image_url] };
						}
						return { ...prevState, images: [image_url] };
					});
				},
			}
		);
	};
	const updloadText = () => {
		const { images } = variety;
		if (images && images.length === 1) {
			return 'Upload 1 more image';
		}
		return 'Upload images';
	};
	return (
		<div className="product-variety-view-modal">
			<Row gutter={8}>
				<Col sm={24} md={12}>
					Price
					<Input
						placeholder="Enter variety price"
						id="price"
						onChange={handleInputChange}
						value={variety.price}
					/>
				</Col>
				<Col sm={24} md={12}>
					Color
					<Input
						placeholder="Enter variety color"
						id="color"
						onChange={handleInputChange}
						value={variety.color}
					/>
				</Col>
				<Col sm={24} md={24}>
					Size
					<Input
						placeholder="Enter variety size"
						id="size"
						onChange={handleInputChange}
						value={variety.size}
					/>
				</Col>
			</Row>
			<Row>
				<Col sm={24}>
					<Spin spinning={uploading}>
						{!variety.images || variety.images.length < 2 ? (
							<div className="upload-button" onClick={handleOnClick}>
								<PlusOutlined />
								<input type="file" ref={inputRef} onChange={handleChange} hidden />
								<div style={{ marginTop: 8 }}>{updloadText()}</div>
							</div>
						) : null}
					</Spin>
				</Col>
				{variety.images && variety.images.length
					? variety.images.map((image, i) => (
							<Col style={{ textAlign: 'center' }} key={i} sm={24}>
								<Image src={image} alt="" />
							</Col>
					  ))
					: null}
			</Row>
			<Col sm={24} style={{ marginTop: 20, textAlign: 'right' }}>
				{productVariety && productVariety.price ? (
					<Button type="primary" onClick={handleOnOkClicked}>
						OK
					</Button>
				) : (
					<Button type="primary" onClick={handleOnAddClicked}>
						Add Variety
					</Button>
				)}
			</Col>
		</div>
	);
};

export default ProductVarieties;
