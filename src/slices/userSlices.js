import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: { "id": null, "email": null, "first_name": null, "last_name": null, "avatar": null},
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users =action.payload;
        }
    },
})

export const { setUsers} = userSlice.actions
export const selectRestaurant = (state)=>state.restaurant.restaurant;
export default userSlice.reducer