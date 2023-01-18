import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: {
        "id": null,
        "title":null,
        "price": null,
        "description": null,
        "category":null,
        "image": null,
        "rating": {
            "rate": null,
            "count": null
        }
    },
}

export const productSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.users = action.payload;
        }
    },
})

export const { setProduct } = productSlice.actions
export const selectProduct = (state) => state.product;
export default productSlice.reducer