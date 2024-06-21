import { flatDeep } from '../utils/flatDeep';
import { getAllItems } from './items-util';

export const getPopularTags = () => {
	const posts = getAllItems('posts');

	const popularTags = flatDeep(posts.map((post) => post.popularTag));

	return [...new Set(popularTags)];
};
