import { message, Spin, Table } from 'antd';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { deleteItem } from 'libs/api';
import { useMutation } from 'helpers';
import columns from './productTableColumns';
import { useItems } from 'data';
import { AddButton, ButtonsContainer } from 'components/buttons';
import { serializeProduct } from 'helpers';

const ProductList = () => {
	const history = useHistory();
	const { mutate, isLoading } = useMutation(deleteItem);
	const queryClient = useQueryClient();

	const { isLoading: loading, data } = useItems('products');

	const onDelete = (record) => {
		mutate(
			{ key: 'products', id: record.id },
			{
				onSuccess: (data) => {
					message.success(data.message);
					queryClient.invalidateQueries('products');
				},
			}
		);
	};

	const onView = (record) => {
		history.push(`/products/${record.id}`, { product: record });
	};
	const logging = () => {
		if (loading) return 'fetching products...';
		if (isLoading) return 'deleting products...';
	};
	console.log('data', data);
	return (
		<>
			<div className="add-newsletter">
				<ButtonsContainer>
					<AddButton
						disabled={isLoading || loading}
						text="Add Product"
						handleOnClick={() => history.push('/products/new/add')}
					/>
				</ButtonsContainer>
				<div className="table-header">
					<span>Product List</span>
				</div>
				<Spin spinning={loading || isLoading} tip={logging()}>
					<Table
						scroll={{ x: true }}
						rowKey={(record) => record.id}
						columns={columns(onView, onDelete)}
						dataSource={data ? data.data.map((product) => serializeProduct(product)) : []}
					/>
				</Spin>
			</div>
		</>
	);
};
export default ProductList;
