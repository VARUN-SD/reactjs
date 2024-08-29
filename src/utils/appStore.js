import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";  // Import your cart reducer

const appStore=configureStore({
    reducer: {
        // it  is a single large reducer object ,so reducer(singular)
        cart: cartReducer,
    }
});

export default appStore;