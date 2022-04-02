import create from "zustand";
import { AuthUser } from "../entities/AuthUser";

interface AuthType {
	setUser: (info: AuthUser) => void;
	user: AuthUser;
}

// 아직 정환한 인터페이스 정의 없어서 가라로 넣음
// TODO: 유저 인증 정보에 인터페이스 정의되면 맞춰서 엔터티 매핑
export const useAuthStore = create<AuthType>(set => ({
	user: {
		displayName: "",
		email: "",
		token: "",
		photoURL: "",
	},
	setUser: (info: AuthUser) =>
		set(() => ({
			user: info,
		})),
}));
