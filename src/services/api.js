import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {firstName: "ea", lastName: "", email: "", password: ""};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialStateValue,
        valueFilled: false,
        token: "none",
        status: 0,
        connected: false,
        message: "",
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            state.valueFilled = false;
            state.token = "none";
            state.status = 0;
            state.connected = true;
            state.message = "";
        },
        logout: (state) => {
            state.value = initialStateValue;
            state.valueFilled = false;
            state.token = "none";
            state.status = 0;
            state.connected = false;
            state.message = "";
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

