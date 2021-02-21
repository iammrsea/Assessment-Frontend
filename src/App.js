import { Route, BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import routes from 'routes';
import AdminLayout from 'layout/Layout';

const App = () => {
	const { admin, users } = routes;
	const client = new QueryClient();
	const pages = [...admin, ...users].map((route, i) => (
		<Route
			key={i}
			exact
			path={route.path}
			render={() => {
				const Component = route.page;
				return (
					<AdminLayout>
						<Component />
					</AdminLayout>
				);
			}}
		/>
	));
	return (
		<QueryClientProvider client={client}>
			<Router>{pages}</Router>
		</QueryClientProvider>
	);
};

export default App;
