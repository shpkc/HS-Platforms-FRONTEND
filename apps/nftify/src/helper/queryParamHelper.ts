export const queryParams = (url: string, param: string[][]) => {
	const parsingUrl = new URL(url);
	const params = parsingUrl.searchParams;
	param.map(item => params.set(item[0], item[1]));

	return parsingUrl.toString();
};
