import { configureStore, createSlice } from "@reduxjs/toolkit";

const studentData = createSlice({
	name: "student",
	initialState: {
		firstName: "",
		lastName: "",
		goal: "",
		group1: "",
		group2: "",
		group3: "",
		group4: "",
		compulsory: "English",
	},
	reducers: {
		setFirstName(state, action) {
			state.firstName = action.payload;
		},
		setLastName(state, action) {
			state.lastName = action.payload;
		},
		setGoal(state, action) {
			state.goal = action.payload;
		},
		setGroup1(state, action) {
			state.group1 = action.payload;
		},
		setGroup2(state, action) {
			state.group2 = action.payload;
		},
		setGroup3(state, action) {
			state.group3 = action.payload;
		},
		setGroup4(state, action) {
			state.group4 = action.payload;
		},
	},
});

export const student = studentData.actions;
const store = configureStore({
	reducer: studentData.reducer,
});
export default store;
