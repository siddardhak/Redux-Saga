import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'User',
    initialState: {
        users: []
    },
    reducers: {
        displayUsers(state, action) {
            console.log(action.payload)
            state.users = action.payload.data
        },
        createdUser(state, action) {
            console.log('created user')
        }
    }
});

export const { displayUsers, createdUser } = UserSlice.actions;

export default UserSlice;