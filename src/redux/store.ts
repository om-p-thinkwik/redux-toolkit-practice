import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    devTools: true, 
}); 

export type RootState = ReturnType<typeof store.getState>