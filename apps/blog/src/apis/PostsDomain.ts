import React from "react";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import glob from "glob";
import { getMethod } from "src/hooks/apiMethod/getMethod";
import { POSTS_API } from "src/constants/api";

export const POSTS_DIRECTORY_PATH = join(process.cwd(), "apps/blog/posts");

// NOTE : main(home) api
export const getMain = () =>
	getMethod({
		url: `${POSTS_API}/main`,
	})();

// NOTE : get post by path
export const getPostsByAbsolutePath = ({
	path,
	category,
	fields,
	needPrefix,
}: {
	path: string;
	category: string;
	fields: string[];
	needPrefix?: boolean;
}) => {
	const prefixPath = `apps/blog/posts/${category}/`;
	const prefixFilePath = join(process.cwd(), `${prefixPath}/${path}.mdx`);
	const fileContents = needPrefix
		? fs.readFileSync(prefixFilePath, "utf8")
		: fs.readFileSync(path, "utf8");

	const { data, content } = matter(fileContents);

	const items: Record<string, any> = {};

	fields.forEach(field => {
		if (field === "content") {
			items[field] = content;
		}
		if (data[field]) {
			items[field] = data[field];
		}
	});

	return items;
};

// NOTE : all mdx file path
export const getAbsoluteArticles = (directory: string, category?: string) => {
	const categoryGlobPattern = category == null ? "**" : category;
	const files = glob
		.sync(`${directory}/${categoryGlobPattern}/*.mdx`)
		.reduce<string[]>((acc, cur) => [...acc, cur], []);
	return files;
};
// NOTE : SSG paths
export const getPosts = (fields: string[] = [], category?: string) => {
	const paths = getAbsoluteArticles(POSTS_DIRECTORY_PATH, category);
	console.log(POSTS_DIRECTORY_PATH);
	console.log(paths);

	const articles = paths
		.map(path => getPostsByAbsolutePath({ path, category, fields }))
		.sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
	return articles;
};
