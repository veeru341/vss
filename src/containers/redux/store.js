import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartReducer"

export const store = configureStore({
    reducer : {
        CartReducer : CartReducer
    }
})