import { FileImageOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useState, useRef } from 'react';
import { beforeUpload, getBase64, isImageValid } from 'helpers';

const CustomUpload = ({ children, onChange, beforeUpload }) => {
	const [, setFile] = useState('');
	const inputRef = useRef(null);

	const handleOnClick = () => {
		inputRef.current.click();
	};
	const handleChange = (e) => {
		const {
			target: { files },
		} = e;
		const file = files[0];
		if (!file) return;
		if (!beforeUpload(file)) return;
		setFile(file);
		onChange(file);
	};
	return (
		<div className="custom-upload" onClick={handleOnClick}>
			<input type="file" ref={inputRef} hidden onChange={(e) => handleChange(e)} />
			{children}
		</div>
	);
};

const UploadButton = ({ text = 'Cover Image', setSelectedFile, image }) => {
	const handleChange = (file) => {
		setSelectedFile(file);
	};
	return (
		<CustomUpload showUploadList={false} action="" beforeUpload={beforeUpload(message)} onChange={handleChange}>
			<div className="updload-button-text">
				<FileImageOutlined />
				<div style={{ marginTop: 8, fontWeight: 600 }}>{text}</div>
			</div>
		</CustomUpload>
	);
};

export default UploadButton;
