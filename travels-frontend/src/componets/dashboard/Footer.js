import React, { Component, PropTypes } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <footer className="footer dark-bg">
                    <div className="container">
                        {/* Row Start */}
                        <div className="row">
                            <div className="col-md-8 col-sm-8">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <h4>Featured Destinations</h4>
                                        <ul>
                                            <li><a href="destination-grid.html">Destination Grid</a></li>
                                            <li><a href="destination-list.html">Destination List</a></li>
                                            <li><a href="destination-grid-sidebar.html">Destination Grid Sidebar</a></li>
                                            <li><a href="destination-list-sidebar.html">Destination List Sidebar</a></li>
                                            <li><a href="destination-detail.html">Destination Detail</a></li>
                                            <li><a href="restaurant-grid.html">Restaurant Grid</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <h4>Featured Tours</h4>
                                        <ul>
                                            <li><a href="tour-grid.html">Tour Grid</a></li>
                                            <li><a href="tour-list.html">Tour List</a></li>
                                            <li><a href="tour-grid-sidebar.html">Tour Grid Sidebar</a></li>
                                            <li><a href="tour-list-sidebar.html">tour List Sidebar</a></li>
                                            <li><a href="tour-detail.html">Tour Detail</a></li>
                                            <li><a href="http://themezhub.com/">Restaurant Grid</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <h4>Featured Hotels</h4>
                                        <ul>
                                            <li><a href="hotel-grid.html">Hotel Grid</a></li>
                                            <li><a href="hotel-list.html">Hotel List</a></li>
                                            <li><a href="hotel-grid-sidebar.html">Hotel Grid Sidebar</a></li>
                                            <li><a href="hotel-list-sidebar.html">Hotel List Sidebar</a></li>
                                            <li><a href="hotel-detail.html">Hotel Detail</a></li>
                                            <li><a href="restaurant-detail.html">Restaurant Detail</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <h4>Subscribe Now</h4>
                                {/* Newsletter */}
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default"><i className="fa fa-location-arrow font-20" /></button>
                                    </span>
                                </div>
                                {/* Social Box */}
                                <div className="f-social-box">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook facebook-cl" /></a></li>
                                        <li><a href="#"><i className="fa fa-google google-plus-cl" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter twitter-cl" /></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest pinterest-cl" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram instagram-cl" /></a></li>
                                    </ul>
                                </div>
                                {/* App Links */}
                                <div className="f-app-box">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-apple" />App Store</a></li>
                                        <li><a href="#"><i className="fa fa-android" />Play Store</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Row Start */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright text-center">
                                    <p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

        );
    }
}


export default Footer;