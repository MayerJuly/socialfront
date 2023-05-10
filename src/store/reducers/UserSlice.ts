import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUser, fetchUserByUsername, updateUser} from "../../services/ActionCreator";

interface UserState {
    users: IUser[],
    user?: IUser,
    isLoading: boolean,
    error: string,
    profileUser?: IUser

}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        [fetchUser.pending.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = true;
        },
        [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [fetchUserByUsername.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = '';
            state.profileUser = action.payload;
        },
        [fetchUserByUsername.pending.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = true;
        },
        [fetchUserByUsername.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        [updateUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.profileUser = action.payload;
        },
        [updateUser.pending.type]: (state) => {
            state.error = '';
        },
        [updateUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },

    }
})

export default userSlice.reducer