import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    //reducers are pure functions that take the current state and an action, and return a new state
    //reducers have multiple functions,so Reducers(plural)
    reducers:{
        addToCart: (state, action) => {
            //Vanilla Redux (Older Redux)=>Dont mutate state return new state is mandatory
            //const newState =[...state]; //newState.items.push(action.payload);//return newState;
            //Redux Toolkit (New Redux)=> we have to modify the state here,return is not mandatory
            state.items.push(action.payload);
    },
        removeFromCart: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];//state.items.length=0
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;