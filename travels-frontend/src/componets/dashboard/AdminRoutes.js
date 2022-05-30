import AdminHeader from "./Header";
import AdminFooter from './Footer';
import AdminSidebar from './Sidebar';
import AdminHome from '../dashboard/Home';
import { Route,Routes,Link} from "react-router";
import DynamicSection from '../dashboard/DynamicSection';
import Dashboard from '../dashboard/Dashboard';

import React, { Component } from 'react';
import Hotel from "../dashboard/Hotel";
import Login from '../dashboard/Login';
import Signup from "../dashboard/Signup";


function AdminRoutes() {
    return (
        <>
            <Routes>
                <Route path="admin/login" element={<Login />}/>
                <Route path="admin/register" element={<Signup/>}/>
                <Route path="admin/logout"/>
                <Route path="/admin" element={<AdminHome/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="hotel" element={<Hotel />}/>

                </Route>
                
            </Routes>
        </>
    );
}

export default AdminRoutes;