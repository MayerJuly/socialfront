import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addPost, getLikes, getTimeline, getUserPosts, likePost} from "../../services/ActionCreator";
import {IPost} from "../../models/IPost";

interface PostState {
    timeline?: IPost[]
    post?: IPost[]
    isPostLoading: boolean,
    postError: string,
    postLikes?: string[]

}

const initialState: PostState = {
    isPostLoading: false,
    postError: '',
    postLikes: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [getTimeline.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isPostLoading = false;
            state.timeline = action.payload;
        },
        [getTimeline.pending.type]: (state) => {
            state.isPostLoading = true;
            state.postError = '';
        },
        [getTimeline.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isPostLoading = false;
            state.postError = action.payload
        },
        [getUserPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isPostLoading = false;
            state.timeline = action.payload;
        },
        [getUserPosts.pending.type]: (state) => {
            state.isPostLoading = true;
            state.postError = '';
        },
        [getUserPosts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isPostLoading = false;
            state.postError = action.payload
        },
        [likePost.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.post = action.payload;
        },
        [likePost.pending.type]: (state) => {
            state.postError = '';
        },
        [likePost.rejected.type]: (state, action: PayloadAction<string>) => {
            state.postError = action.payload
        },
        [getLikes.fulfilled.type]: (state, action: PayloadAction<string[]>) => {
            state.postLikes = action.payload;
        },
        [getLikes.pending.type]: (state) => {
            state.postError = '';
        },
        [getLikes.rejected.type]: (state, action: PayloadAction<string>) => {
            state.postError = action.payload
        },
        [addPost.pending.type]() {

        },
        [addPost.fulfilled.type](state) {
            state.postError = '';
        },
        [addPost.rejected.type](state, action: PayloadAction<string>) {
            state.postError = action.payload;
        },

    }
})

export default postSlice.reducer