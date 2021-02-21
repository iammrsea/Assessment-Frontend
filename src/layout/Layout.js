import { Layout, Menu } from 'antd';
import { NavLink as Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';
// import { ReactComponent as Logo } from 'assets/shopjese.svg';

const AdminLayout = ({ children }) => {
	const { Content, Header, Footer } = Layout;
	const {
		location: { pathname },
	} = useHistory();

	const activeRoute = (path) => {
		return path === pathname;
	};
	return (
		<Layout>
			<Header style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div className="logo" style={{ color: '#0153FF' }}>
					Logo
				</div>
				<Menu mode="horizontal">
					<Menu.Item key="1" className={clsx({ 'active-route': activeRoute('/') })}>
						<Link to="/">Storefront</Link>
					</Menu.Item>
					<Menu.Item key="2" className={clsx({ 'active-route': activeRoute('/products') })}>
						<Link to="/products">Products</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<Content className="container">{children}</Content>
			<Footer className="footer">
				<div>
					Powered by <a href="/#">Vasiti.com</a>
				</div>
			</Footer>
		</Layout>
	);
};

export default AdminLayout;
