import { Cookies } from "react-cookie";

import dotenv from "dotenv";

dotenv.config();

const domainOpt = { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" };

export const setCookie = (
	key: string,
	value: string,
	options?: { [key: string]: number }
) => {
	const date = new Date();
	date.setFullYear(date.getFullYear() + 10);
	const cookies = new Cookies();
	cookies.set(key, value, {
		...options,
		...domainOpt,
		expires: date,
		sameSite: "lax",
	});
};

export const removeCookies = (items: Array<string>) => {
	const cookies = new Cookies();
	items.forEach(element =>
		cookies.remove(element, { ...domainOpt, sameSite: "lax" })
	);
};

export const getCookie = (key: string) => {
	const cookies = new Cookies();
	return cookies.get(key);
};
