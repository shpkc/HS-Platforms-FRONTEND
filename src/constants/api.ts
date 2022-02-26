import dotenv from "dotenv";

dotenv.config();

// NOTE : base api
export const BASE_URL = process.env.NEXT_PUBLIC_API_HOST;

// NOTE :이미지 호스트
export const IMG_URL = process.env.IMG_HOST;

// NOTE : 게임 api
export const GAMES_API = `${BASE_URL}/games`;
