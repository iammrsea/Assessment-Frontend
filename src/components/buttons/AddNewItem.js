import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddNewItem = ({ handleOnClick, text, type = 'primary', ...props }) => {
	return (
		<Button style={{ border: 'none' }} onClick={handleOnClick} {...props} type={type} icon={<PlusOutlined />}>
			{text}
		</Button>
	);
};
export default AddNewItem;
