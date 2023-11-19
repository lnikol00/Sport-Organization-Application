import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux"

function RequireAuth() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const location = useLocation();

    return (
        userInfo && userInfo.isAdmin ?
            <Outlet /> :
            <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth