import React, { useContext, useEffect } from 'react';
import {Routes, Route, Redirect, Navigate} from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const {user} = useContext(Context)
    // ключ exact - путь должен точно совпадать
    console.log(user);
    return (
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE}/>}/>
        </Routes>
    )
}

export default AppRouter;