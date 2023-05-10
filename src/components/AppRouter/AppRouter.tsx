import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {privateRoutes,publicRoutes} from "../../router/router";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {checkAuth} from "../../services/ActionCreator";

const AppRouter = () => {
    const {isAuth, isLoading} = useAppSelector(state => state.authReducer)

    if(isLoading) {
        return <div>Loading</div>
    } else {
        return (
            isAuth
                ?
                <Routes>
                    { privateRoutes.map(route =>
                        <Route
                            key = {route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                    )}
                    <Route path='*'
                           element={<Navigate to="/home" replace />}/>
                </Routes>
                :
                <Routes>
                    { publicRoutes.map(route =>
                        <Route
                            key = {route.path}
                            path={route.path}
                            element={<route.element/>}
                        />
                    )}
                    <Route path='*'
                           element={<Navigate to="/login" replace />}/>
                </Routes>
        )
    }



};

export default AppRouter;