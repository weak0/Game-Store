import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishList',
    initialState:{ wishlist: []},
    reducers: {
        addGame(state, actions) {
            state.wishlist.push(actions.payload)
        },
        removeGame(state, actions) {
            const index = state.wishlist.indexOf(actions.payload)
            state.wishlist.splice(index, 1);
        }
    }
})

export default wishListSlice;
export const wishListActions = wishListSlice.actions