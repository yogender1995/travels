import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/* ======================= Start Navigation ===================== */}
                <nav className="navbar navbar-default navbar-mobile navbar-fixed light bootsnav">
                    <div className="container">
                        {/* Start Logo Header Navigation */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars" />
                            </button>
                            <a className="navbar-brand" href="index-2.html">
                                <img src="assets/img/logo.png" className="logo logo-display" alt="" />
                                <img src="assets/img/logo.png" className="logo logo-scrolled" alt="" />
                            </a>
                        </div>
                        {/* End Logo Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                                    <ul className="dropdown-menu animated fadeOutUp">
                                        <li><a href="index-2.html">Home 1</a></li>
                                        <li><a href="home-2.html">Home 2</a></li>
                                        <li><a href="home-3.html">Home 3</a></li>
                                        <li><a href="home-4.html">Home 4</a></li>
                                        <li><a href="home-5.html">Home 5</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown megamenu-fw"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Brows</a>
                                    <ul className="dropdown-menu megamenu-content" role="menu">
                                        <li>
                                            <div className="row">
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Destinations</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="destination-grid.html">Destination Grid</a></li>
                                                            <li><a href="destination-list.html">Destination List</a></li>
                                                            <li><a href="destination-grid-sidebar.html">Destination Grid Sidebar</a></li>
                                                            <li><a href="destination-list-sidebar.html">Destination List Sidebar</a></li>
                                                            <li><a href="destination-detail.html">Destination Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </div>{/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Tours</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="tour-grid.html">Tour Grid</a></li>
                                                            <li><a href="tour-list.html">Tour List</a></li>
                                                            <li><a href="tour-grid-sidebar.html">Tour Grid Sidebar</a></li>
                                                            <li><a href="tour-list-sidebar.html">tour List Sidebar</a></li>
                                                            <li><a href="tour-detail.html">Tour Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </div>{/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Hotels</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="hotel-grid.html">Hotel Grid</a></li>
                                                            <li><a href="hotel-list.html">Hotel List</a></li>
                                                            <li><a href="hotel-grid-sidebar.html">Hotel Grid Sidebar</a></li>
                                                            <li><a href="hotel-list-sidebar.html">Hotel List Sidebar</a></li>
                                                            <li><a href="hotel-detail.html">Hotel Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Restaurants</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li><a href="restaurant-grid.html">Restaurant Grid</a></li>
                                                            <li><a href="restaurant-list.html">Restaurant List</a></li>
                                                            <li><a href="restaurant-grid-sidebar.html">Restaurant Grid Sidebar</a></li>
                                                            <li><a href="restaurant-list-sidebar.html">Restaurant List Sidebar</a></li>
                                                            <li><a href="restaurant-detail.html">Restaurant Detail</a></li>
                                                        </ul>
                                                    </div>
                                                </div>{/* end col-3 */}
                                            </div>{/* end row */}
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="hire-guider.html">Find Guide</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Extra</a>
                                    <ul className="dropdown-menu animated fadeOutUp">
                                        <li><a href="cart.html">Add To Cart</a></li>
                                        <li><a href="payment-methode.html">Paayment Methode</a></li>
                                        <li><a href="success-page.html">Success Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li className="dropdown"><a href="#">View More</a>
                                            <ul className="dropdown-menu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="faqs.html">FAQs</a></li>
                                                <li><a href="login.html">LogIn</a></li>
                                                <li><a href="signup.html">SignUp</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="icons.html">icons</a></li>
                                                <li><a href="404.html">404</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="dashboard.html">Dashboard</a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown dash-link"><a href="#" className="dropdown-toggle"><img src="assets/img/user-3.jpg" className="img-responsive avatar" alt="" />Hi, Daniel</a>
                                    <ul className="dropdown-menu left-nav">
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                        <li><a href="http://themezhub.com/">My Profile</a></li>
                                        <li><a href="login.html">Log Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                </nav>
                {/* ======================= End Navigation ===================== */}

            </div>

        );
    }
}



export default Header;