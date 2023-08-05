import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]
        },
        clearUsers: (state, action) => {
            state.inputValue = ''
        },
        deleteUsers: (state, action) => {
            state.users = []
            state.inputValue = ''
        }
    }
})


export const { changeInput, addUser, clearUsers, deleteUsers } = usersSlice.actions

export default usersSlice.reducer