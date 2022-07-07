import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {firstName: "", lastName: "", email: "", password: ""};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialStateValue,
        connected: false,
        token: ""
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload[0];
            state.connected = true;
            state.token = action.payload[1];
        },
        logout: (state) => {
            state.value = initialStateValue;
            state.connected = false;
            state.token = "";
        },
        editname: (state, action) => {
            state.value = action.payload[0];
        }
    }
})

export const { login, logout, editname } = userSlice.actions;
export default userSlice.reducer;

