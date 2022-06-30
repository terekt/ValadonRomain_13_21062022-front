import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {firstName: "", lastName: "", email: "", password: ""};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialStateValue,
        connected: false,
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            state.connected = true;
        },
        logout: (state) => {
            state.value = initialStateValue;
            state.connected = false;
        },
        editname: (state, action) => {
            state.value = action.payload;
            state.connected = false;
        }
    }
})

export const { login, logout, editname } = userSlice.actions;
export default userSlice.reducer;

