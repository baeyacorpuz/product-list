import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gatewayApi } from "../application/axios-client";
import { AxiosResponse } from "axios";

export interface LoginPayloadProps {
	email_address: string;
	password: string;
}

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	isRememberUser: false,
	loggedInUser: {},
	errorMessage: "",
}

export const login = createAsyncThunk("auth/login", async (data: LoginPayloadProps) => {
	const response: AxiosResponse = await gatewayApi.post("/authenticate/signin", data)
	return response.data;
});

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state) => {
			state.isLoading = false;
			state.isLoggedIn = true;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false;
			state.isLoggedIn = false;
			if (action.error) {
				state.errorMessage = "User not found";
			}
		});
	}
})

export default authSlice.reducer;