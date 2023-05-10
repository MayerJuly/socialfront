import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice'
import authReducer from './reducers/AuthSlice'
import postReducer from './reducers/PostSlice'
import uploadReducer from './reducers/UploadSlice'

const rootReducers = combineReducers( {
    userReducer,
    authReducer,
    postReducer,
    uploadReducer,

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducers
    })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']