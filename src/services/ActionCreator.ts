import {AppDispatch} from "../store/store";
import {IUser} from "../models/IUser";
import $api from "../http";
import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "./AuthService";
import {authSlice} from "../store/reducers/AuthSlice";
import {IUpdateUser} from "../models/IUpdateUser";
import UserService from "./UserService";
import PostService from "./PostService";
import UploadService from "./uploadService";
import {ISendPostType} from "../models/ISendPostType";


interface loginProps {
    email: string,
    password: string
}


export const loginUser = (props: loginProps) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSlice.actions.loginFetching())
        const response = await AuthService.login(props.email, props.password)
        await localStorage.setItem('token', response.data.token)
        if (response.data) {
            dispatch(authSlice.actions.loginFetchingSuccess(response.data.user))
        } else {
            dispatch(authSlice.actions.loginFetchingError('Login error'))
        }
    } catch (e: any) {
        dispatch(authSlice.actions.loginFetchingError(e.response?.data?.message))
    }
}

export const registerUser = (props: IUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSlice.actions.registerFetching())
        const response = await AuthService.register(props)
        localStorage.setItem('token', response.data.token)
        dispatch(authSlice.actions.registerFetchingSuccess())
    } catch (e: any) {
        dispatch(authSlice.actions.registerFetchingError(e.response?.data?.message))

    }
}


export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSlice.actions.checkAuth())
        const response = await AuthService.check()
        dispatch(authSlice.actions.checkAuthSuccess(response.data.user))
    } catch (e: any) {
        dispatch(authSlice.actions.checkAuthError(e.response?.data?.message))
    }
}

export const logoutUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSlice.actions.logoutAuth())
        const response = await AuthService.logout()
        dispatch(authSlice.actions.logoutAuthSuccess())
    } catch (e: any) {
        dispatch(authSlice.actions.logoutAuthError(e.response?.data?.message))

    }
}


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (userId:string, thunkAPI) => {
        try {
            const response = await UserService.get(userId)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to get user")
        }
    }
)
export const fetchUserByUsername = createAsyncThunk(
    'user/fetchUserByUsername',
    async (username:string, thunkAPI) => {
        try {
            const response = await $api.get<IUser>(`/users/username/${username}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to get user")
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/fetchUser',
    async (props:IUpdateUser, thunkAPI) => {
        try {
            const response = await UserService.update({...props})
            console.log(response.data.user)
            return response.data.user
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to update user")
        }
    }
)


export const getTimeline = createAsyncThunk(
    'post/getTimeline',
    async (_, thunkAPI) => {
        try {
            const response = await PostService.getTimeline()
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to get timeline posts")
        }
    }
)

export const getUserPosts = createAsyncThunk(
    'post/getUserPosts',
    async (userId:string, thunkAPI) => {
        try {
            const response = await PostService.getUserPosts(userId)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to get timeline posts")
        }
    }
)

export const likePost = createAsyncThunk(
    'post/likePost',
    async (postId:string, thunkAPI) => {
        try {
            const response = await PostService.likePost(postId)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to like post")
        }
    }
)
export const getLikes = createAsyncThunk(
    'post/getLikes',
    async (postId:string, thunkAPI) => {
        try {
            const response = await PostService.getLikes(postId)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to like post")
        }
    }
)



export const addPost = createAsyncThunk(
    '/post/addPost',
    async (post: ISendPostType, thunkAPI) => {
        try {
            const response = await PostService.addPost(post);

            return response.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue('Не удалось создать пост');
        }
    }
)

export const uploadImage = createAsyncThunk(
    '/upload',
    async (image: FormData, thunkAPI) => {
        try {
            const response = await UploadService.uploadImage(image);

            return;
        } catch (e: any) {
            return thunkAPI.rejectWithValue('Не удалось загрузить фотографию');
        }
    }
);