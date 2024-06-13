// Define the initial state using that type
const initialState = {
	isLoading: false,
	isLoggedIn: false,
	isRememberUser: false,
	loggedInUser: {},
}

export default function reducer(state = initialState, action: any) {
	switch (action.type) {
		default:
			return state
	}
}