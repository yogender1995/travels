import React from "react";
import AdminHeader from "./Header";
import AdminFooter from './Footer';
import AdminSidebar from './Sidebar';
import AdminHome from './Home';
import { Route,Routes } from "react-router";


function AdminRoutes() {
    return (
        <div>
            <Routes>
            <Route path="/admin" element={<AdminHome />}>
                </Route>
            </Routes>
            <AdminHeader />
            <section className="dashboard gray-bg padd-0 mrg-top-50">
                <div className="container-fluid">
                    <div className="row">
                        <AdminSidebar />
                        <AdminHome />
                    </div>
                </div>
            </section>
            <AdminFooter />
        </div>
    );
}

export default AdminRoutes;