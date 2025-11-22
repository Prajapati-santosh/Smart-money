import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Outlet } from "react-router";
import { Navigate } from "react-router";

export default function ProtectedRoute(){
    const {isAutheticated}=useContext(AuthContext);

    return isAutheticated ? <Outlet /> : <Navigate to="/Login" />;

}
