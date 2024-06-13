import axios from 'axios'

const BASE_URL = "https://api.baeintech.com";
// const BASE_URL = "http://localhost:8080";
// const BASE_URL = "https://authentication-git-develop-baeintech.vercel.app";

export const gatewayApi = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Access-Control-Allow-Origin": "*", // Required for CORS support to work
	},
});

gatewayApi.interceptors.request.use(
	(config) => {
		// const token = getToken();
		let token;
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);