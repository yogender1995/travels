import React, { Component } from 'react';
import { Link, Navigate } from  'react-router-dom';
import { useEffect, useState } from 'react';


import AuthUser from '../AuthUser';

const Sidebar = () => {
    const {http} = AuthUser();
    const [userdetail,setUserdetail] = useState('');

    const {token,logout} = AuthUser();

    const fetchUserDetail = () =>{
        http.post('/me').then((res)=>{
            setUserdetail(res.data);
        });
    }

    useEffect(()=>{
        fetchUserDetail();
     
    },[]);

    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }

    return (
        <div>
            <div className="col-lg-2 col-md-2 col-sm-3 dashboard-bg">
                    {/* /. NAV TOP  */}
                    <nav className="navbar navbar-side">
                        {/* Start Logo Header Navigation */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#dashboard-menu">
                                <i className="fa fa-bars" />
                            </button>
                        </div>
                        <div className="collapse sidebar-collapse" id="dashboard-menu">
                            <div className="profile-wrapper">
                                <div className="profile-wrapper-thumb">
                                    <img src="assets/img/user-3.jpg" className="img-responsive img-circle" alt="" />
                                    <span className="dashboard-user-status bg-success" />
                                </div>
                                <h4>{userdetail.name}</h4>
                                <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                            </div>
                            <ul className="nav" id="main-menu">
                                <li className="active">
                                    <Link to="dashboard"><i className="fa fa-dashboard" aria-hidden="true" />Home</Link>
                                </li>
                                <li>
                                    <a href="messages.html"><i className="ti-email" aria-hidden="true" />Messages</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-clone" aria-hidden="true" />Manage Listing <span className="fa arrow" /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <Link to='hotel'><i className="fa fa-circle-o-notch" aria-hidden="true" />Manage Hotels</Link>
                                        </li>
                                        <li>
                                            <a href="manage-tours.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Manage Tours</a>
                                        </li>
                                        <li>
                                            <a href="manage-destinations.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Manage Destinations</a>
                                        </li>
                                        <li>
                                            <a href="manage-restaurants.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Manage Restaurants</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="ti-location-pin" aria-hidden="true" />Add Listings <span className="fa arrow" /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <a href="http://themezhub.com/"><i className="fa fa-circle-o-notch" aria-hidden="true" />Add Hotels</a>
                                        </li>
                                        <li>
                                            <a href="add-tours.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Add Tours</a>
                                        </li>
                                        <li>
                                            <a href="add-destinations.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Add Destinations</a>
                                        </li>
                                        <li>
                                            <a href="add-restaurants.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Add Restaurants</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="invoice.html"><i className="fa-print" aria-hidden="true" />Invoice</a>
                                </li>
                                <li>
                                    <a href="#"><i className="ti-calendar" aria-hidden="true" />My Booking <span className="fa arrow" /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <a href="booking-1.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Booking 1</a>
                                        </li>
                                        <li>
                                            <a href="booking-2.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Booking 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-cog" aria-hidden="true" />Settings <span className="fa arrow" /></a>
                                    <ul className="nav nav-second-level">
                                        <li>
                                            <a href="basic-settings.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Basic Settings</a>
                                        </li>
                                        <li>
                                            <a href="site-settings.html"><i className="fa fa-circle-o-notch" aria-hidden="true" />Site Settings</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="my-profile.html"><i className="ti-user" aria-hidden="true" />My Profile</a>
                                </li>
                                <li>
                                    <a href="add-payment-methode.html"><i className="ti-credit-card" aria-hidden="true" />Add Payment Methode</a>
                                </li>
                                <li className="log-off">
                                    <a href="login.html"><i className="fa fa-power-off" aria-hidden="true" />Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* /. NAV SIDE  */}
                </div>
            
        </div>
    );
}

export default Sidebar;
