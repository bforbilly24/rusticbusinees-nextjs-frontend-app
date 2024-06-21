import { flatDeep } from '../utils/flatDeep';
import { getAllItems } from './items-util';

export const getPostTags = () => {
	const posts = getAllItems('posts');

	const tags = flatDeep(posts.map((post) => post.postTags));

	return [...new Set(tags)];
};
