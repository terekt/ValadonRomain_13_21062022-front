import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./api";

export const store = configureStore({reducer : { user: userReducer }});

store.subscribe(() => {
    console.log(store.getState())
})