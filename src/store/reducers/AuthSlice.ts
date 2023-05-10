import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {IAuthUser} from "../../models/IAuthUser";

interface AuthState {
    isAuth: boolean,
    error: string,
    isLoading: boolean,
    isRegister: boolean,
    authUser: IAuthUser,

}



const initialState: AuthState = {
    isAuth: false,
    error: '',
    isLoading:true,
    isRegister: false,
    authUser: {_id: "", username: ""}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        loginFetching(state) {
                state.isAuth = false;
                state.isRegister = false;
                state.error = '';
        },
        loginFetchingSuccess(state, action: PayloadAction<IAuthUser>) {
                state.isAuth = true;
                state.authUser = action.payload
            console.log(action.payload)

        },
        loginFetchingError(state, action: PayloadAction<string>) {
                state.error = action.payload;

        },


        registerFetching(state) {
            state.error = '';
        },
        registerFetchingSuccess(state) {
            state.isRegister = true;

        },
        registerFetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload;

        },


        checkAuth(state) {
            state.error='';
            state.isLoading=true;
        },
        checkAuthSuccess(state, action:PayloadAction<IAuthUser>) {
            state.isAuth = true;
            state.isLoading=false;
            state.authUser = action.payload
            console.log(action.payload)
        },
        checkAuthError(state) {
            state.isAuth = false;
            state.isLoading=false;

        },


        logoutAuth(state) {
            state.error='';
        },
        logoutAuthSuccess(state) {
            state.error='';
            localStorage.removeItem('token')
            state.isAuth = false;
            state.isLoading=false;
        },
        logoutAuthError(state, action: PayloadAction<string>) {
            state.error= action.payload;

        },


        isLoadingFalse(state) {
            state.isLoading=false;
        },

    },
    extraReducers: {


    }
})

export default authSlice.reducer