import httpHelper from "./api-helper.service";
import Cookies from "js-cookie";

export interface LoginDto {
	email: string;
	password: string;
}

export interface CommonResponse {
	code: string;
	data: LoginResponse;
	message: string;
}

export interface LoginResponse {
	access_token: string;
}

export const AuthService = {
	async login(credentials: LoginDto): Promise<CommonResponse> {
		const res = await httpHelper.post<CommonResponse>(
			"/auth/login",
			credentials
		);
		return res.data;
	},

	saveToken(token: string) {
		Cookies.set("token", token, { expires: 1, path: "/" });
	},

	getToken(): string | undefined {
		return Cookies.get("token");
	},

	logout() {
		Cookies.remove("token", { path: "/" });
	},
};
