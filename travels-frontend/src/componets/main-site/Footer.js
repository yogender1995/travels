import React, { Component, PropTypes } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    {/* ================= footer start ========================= */}
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
                    {/* Sign Up Window Code */}
                    <div className="modal fade" id="signin" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content" id="myModalLabel1">
                                <div className="modal-body">
                                    <div className="text-center"><img src="assets/img/logo.png" className="img-responsive" alt="" /></div>
                                    {/* Nav tabs */}
                                    <ul className="nav nav-tabs nav-advance theme-bg" role="tablist">
                                        <li className="nav-item active">
                                            <a className="nav-link" data-toggle="tab" href="#employer" role="tab">
                                                <i className="ti-user" /> Employer</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#candidate" role="tab">
                                                <i className="ti-user" /> Candidate</a>
                                        </li>
                                    </ul>
                                    {/* Nav tabs */}
                                    {/* Tab panels */}
                                    <div className="tab-content">
                                        {/* Employer Panel 1*/}
                                        <div className="tab-pane fade in show active" id="employer" role="tabpanel">
                                            <form>
                                                <div className="form-group">
                                                    <label>User Name</label>
                                                    <input type="text" className="form-control" placeholder="User Name" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="*********" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id={4} />
                                                        <label htmlFor={4} />Remember me
                                                    </span>
                                                    <a href="#" title="Forget" className="fl-right">Forgot Password?</a>
                                                </div>
                                                <div className="form-group text-center">
                                                    <button type="button" className="btn theme-btn full-width btn-m">LogIn </button>
                                                </div>
                                            </form>
                                            <div className="log-option"><span>OR</span></div>
                                            <div className="row mrg-bot-20">
                                                <div className="col-md-6">
                                                    <a href="#" title className="fb-log-btn log-btn"><i className="fa fa-facebook" />Sign In With Facebook</a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a href="#" title className="gplus-log-btn log-btn"><i className="fa fa-google-plus" />Sign In With Google+</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/.Panel 1*/}
                                        {/* Candidate Panel 2*/}
                                        <div className="tab-pane fade" id="candidate" role="tabpanel">
                                            <form>
                                                <div className="form-group">
                                                    <label>User Name</label>
                                                    <input type="text" className="form-control" placeholder="User Name" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control" placeholder="*********" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="custom-checkbox">
                                                        <input type="checkbox" id={4} />
                                                        <label htmlFor={4} />Remember me
                                                    </span>
                                                    <a href="#" title="Forget" className="fl-right">Forgot Password?</a>
                                                </div>
                                                <div className="form-group text-center">
                                                    <button type="button" className="btn theme-btn full-width btn-m">LogIn </button>
                                                </div>
                                            </form>
                                            <div className="log-option"><span>OR</span></div>
                                            <div className="row mrg-bot-20">
                                                <div className="col-md-6">
                                                    <a href="#" title className="fb-log-btn log-btn"><i className="fa fa-facebook" />Sign In With Facebook</a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a href="#" title className="gplus-log-btn log-btn"><i className="fa fa-google-plus" />Sign In With Google+</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/*/.Panel 2*/}
                                    </div>
                                    {/* Tab panels */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Sign Up Window */}
                </div>

            </div>
        );
    }
}


export default Footer;