import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {checkAuth, logoutUser} from "./services/ActionCreator";
import AuthSlice, {authSlice} from "./store/reducers/AuthSlice";


function App() {
    const {isLoading} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(checkAuth())

        } else if(isLoading) {
            dispatch(authSlice.actions.isLoadingFalse())
        }

    }, [])




    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
