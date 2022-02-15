/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
export const getKey = (key: AxiosResponse["data"]) => {
	return Object.keys(key).find(Boolean) as string;
};
export const getKeys = (key: AxiosResponse["data"]) => {
	return Object.keys(key);
};

export const getValue = (value: AxiosResponse["data"]) => {
	return Object.values(value).find(Boolean);
};

export const getFirstItem = (arr: any[]) => arr[0];
