import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartValues: []
}

const CartReducer = createSlice({
    name: "CartReducer",
    initialState,
    reducers: {
        addproduct: (state, action) => {
            state.cartValues.push(action.payload)
        },
        removeProduct: (state, action) => {
            // Access the productId property from action.payload
            const productIdToRemove = action.payload.productId;

            // Find the index of the product with the specified ID
            const index = state.cartValues.findIndex(product => product.id === productIdToRemove);

            // Remove the product if found
            if (index !== -1) {
                state.cartValues.splice(index, 1);
            }
        }
    }
})

export default CartReducer.reducer

export const { addproduct, removeProduct } = CartReducer.actions