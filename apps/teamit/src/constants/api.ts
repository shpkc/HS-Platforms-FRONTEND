import dotenv from "dotenv";

dotenv.config();

// NOTE : base host
export const BASE_URL = process.env.NEXT_PUBLIC_API_HOST;

// NOTE :이미지 호스트
export const IMG_URL = process.env.IMG_HOST;

// NOTE : products api
export const COURTS_API = `${BASE_URL}/courts`;

// NOTE : collections api
export const COLLECTIONS_API = `${BASE_URL}/collections`;
