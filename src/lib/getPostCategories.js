import { flatDeep } from '../utils/flatDeep';
import { getAllItems } from './items-util';

export const getPostCategories = () => {
	const posts = getAllItems('posts');

	const categories = flatDeep(posts.map((post) => post.category));

	return [...new Set(categories)];
};
