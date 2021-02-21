const ButtonsContainer = ({ children, ...rest }) => {
	return <div style={{ marginTop: 20, marginBottom: 30, textAlign: 'right', ...rest }}>{children}</div>;
};
export default ButtonsContainer;
