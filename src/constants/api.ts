import dotenv from "dotenv";

dotenv.config();

export const BASE_URL = process.env.NEXT_PUBLIC_API_HOST;
export const IMG_URL = process.env.IMG_HOST;

// NOTE : 메인 무비 리스트
export const COURTS_LIST = `${BASE_URL}/courts`;
export const GAMES_API = `${BASE_URL}/games`;
