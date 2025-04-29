import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemTypes } from "../../types/types";
import { RootState } from "../store";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state:ItemTypes[],action) => {
            state.push(action.payload);
        },
        removeItem: (state, action:PayloadAction<{name: string}>) => {
            return state.filter((item: ItemTypes) => item.name !== action.payload.name);
        }
        
    }
}) 

export const getItemsSelector = (state: RootState) => state.cart;

export const { addItem,removeItem } = cartSlice.actions;
export default cartSlice.reducer;