import { Button, Space, Tooltip, Popconfirm } from 'antd';
import { EyeFilled, DeleteOutlined } from '@ant-design/icons';

const newsletterTableColumns = (onView, onDelete) => [
	{
		title: 'Product Name',
		dataIndex: 'productName',
	},
	{
		title: 'Product Description',
		dataIndex: 'productDescription',
	},
	{
		title: 'Date Uploaded',
		dataIndex: 'dateUploaded',
	},
	{
		title: 'Action',
		dataIndex: 'action',
		render: (_, record) => (
			<Space>
				<Tooltip title="View">
					<Button
						type="text"
						style={{ color: '#0153ff' }}
						onClick={() => onView(record)}
						icon={<EyeFilled />}
					/>
				</Tooltip>

				<Tooltip title="Delete">
					<Popconfirm title="Sure to delete product?" onConfirm={() => onDelete(record)}>
						<Button type="text" danger icon={<DeleteOutlined />} />
					</Popconfirm>
				</Tooltip>
			</Space>
		),
	},
];
export default newsletterTableColumns;
