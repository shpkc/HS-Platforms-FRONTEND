import { useAuthStore } from "src/models/stores/AuthStore";
import NextAuth from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import { isEqual } from "lodash";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	// NOTE : email, password 로그인 provider
	const providers = [
		CredentialsProvider({
			id: "email-password-credential",
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			async authorize(credentials) {
				const payload = {
					email: credentials?.email,
					password: credentials?.password,
				};

				// NOTE : 로그인 api 처리
				const user = { email: "test@fastlane.kr", password: "test" };
				if (isEqual(payload, user)) {
					return user;
				} else {
					return null;
				}
			},
		}),
	];
	return await NextAuth(req, res, {
		providers: providers,
		pages: {
			signIn: "/",
		},
		secret: "secret",
		callbacks: {
			// TODO: type지정
			async signIn({ account, profile }: any) {
				// NOTE : 혹시 추가적으로 작업 필요시
				if (isEqual(account.provider, "email-password-credential")) {
					// NOTE : 전역 스토어에 사용자 정보 저장
					useAuthStore.setState(state => ({
						user: { ...state.user, token: "helloworld" },
					}));
				}
				return true;
			},
			async session({ session, token }) {
				session.accessToken = "helloWorld";
				return session;
			},
			//TODO: 추후 로그인 로직 처리
			async jwt({ token, user, account }) {
				if (user as any) {
					return token;
				}
				return token;
			},
		},
	});
}
