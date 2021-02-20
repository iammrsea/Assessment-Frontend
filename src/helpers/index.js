import moment from 'moment';
import routes from 'routes';
export { default as errorMessage } from './errorMessage';
export { default as useBreakpoint } from './useBreakpoint';
export { default as useMutation } from './useMutation';

export const excerpt = (description = ' ', number = 70) => {
	return description.substring(0, number);
};

export const topbarTitle = () => {
	let hash = window.location.hash;
	hash = hash.replace(/#/, '');
	const combinedRoutes = [...routes.admin, ...routes.dynamicRoutes];
	for (let i = 0; i < combinedRoutes.length; i++) {
		const route = combinedRoutes[i];
		if (route.path === hash) {
			return route.name;
		}
		if (hash.startsWith('/plans') && hash.endsWith('/edit')) {
			return 'Edit Plan';
		}
		if (hash.startsWith('/blogs') && hash.endsWith('/edit')) {
			return 'Edit Blog Post';
		}
		if (hash.startsWith('/newsletters') && hash.endsWith('/edit')) {
			return 'Edit Newsletter';
		}
		if (hash.startsWith('/stores') && hash.endsWith('/details')) {
			return 'Store Details';
		}
	}
	return '';
};

export const getBase64 = (img, callback) => {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
};

export const beforeUpload = (message) => (file) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt7M = file.size / 1024 / 1024 < 5;
	if (!isLt7M) {
		message.error('Image must be smaller than 5MB!');
	}
	return isJpgOrPng && isLt7M;
};

export const isImageValid = (file) => {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
	const isLt7M = file.size / 1024 / 1024 < 5;
	return isJpgOrPng && isLt7M;
};
export const serializePost = (post, notEdit = true) => {
	post = {
		...post,
		shortTitle: excerpt(post.title, 20) + '...',
		category: post.category.name,
		publishedAt: notEdit ? moment(post.published_at).format('ll') : moment(post.published_at),
	};
	if (post.coverImage) {
		return { ...post, coverImage: post.coverImage.url };
	}
	return post;
};
