import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {uploadImage} from "../../services/ActionCreator";

interface UploadState {
    isLoading: boolean;
    error: string;
}

const initialState: UploadState = {
    isLoading: false,
    error: '',
};

export const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {},
    extraReducers: {
        [uploadImage.pending.type](state) {
            state.isLoading = true;
        },
        [uploadImage.fulfilled.type](state) {
            state.isLoading = false;
            state.error = '';
        },
        [uploadImage.rejected.type](state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default uploadSlice.reducer;