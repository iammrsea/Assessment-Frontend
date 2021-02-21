import { ProductPage, ProductList, Storefront, AddProduct } from 'pages';

const routes = {
	admin: [
		{ path: '/products', page: ProductList, name: 'Products' },
		{ path: '/products/new/add', page: AddProduct, name: 'Add Product' },
		{ path: '/products/:id', page: ProductPage, name: 'Edit Product' },
	],
	users: [{ path: '/', page: Storefront, name: 'Store' }],
};
export default routes;
