import React, { Component, PropTypes } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="col-lg-10 col-md-10 col-sm-9 col-lg-push-2 col-md-push-2 col-sm-push-3">
                    <div className="row mrg-0 mrg-top-20">
                        <div className="tr-single-box">
                            <div className="tr-single-header">
                                <h3 className="dashboard-title">Dashboard</h3>
                            </div>
                            <div className="tr-single-body">
                                {/* row */}
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="widget simple-widget">
                                            <div className="rwidget-caption info">
                                                <div className="row">
                                                    <div className="col-xs-4 padd-r-0">
                                                        <i className="cl-info icon ti-user" />
                                                    </div>
                                                    <div className="col-xs-8">
                                                        <div className="widget-detail">
                                                            <h3>372</h3>
                                                            <span>New Users</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <div className="widget-line">
                                                            <span style={{ width: '80%' }} className="bg-info widget-horigental-line" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="widget simple-widget">
                                            <div className="widget-caption danger">
                                                <div className="row">
                                                    <div className="col-xs-4 padd-r-0">
                                                        <i className="cl-danger icon ti-shopping-cart-full" />
                                                    </div>
                                                    <div className="col-xs-8">
                                                        <div className="widget-detail">
                                                            <h3>412</h3>
                                                            <span>Happy Customer</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <div className="widget-line">
                                                            <span style={{ width: '50%' }} className="bg-danger widget-horigental-line" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="widget simple-widget">
                                            <div className="widget-caption warning">
                                                <div className="row">
                                                    <div className="col-xs-4 padd-r-0">
                                                        <i className="cl-success icon ti-medall" />
                                                    </div>
                                                    <div className="col-xs-8">
                                                        <div className="widget-detail">
                                                            <h3>870</h3>
                                                            <span>World Award</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <div className="widget-line">
                                                            <span style={{ width: '60%' }} className="bg-success widget-horigental-line" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="widget simple-widget">
                                            <div className="widget-caption purple">
                                                <div className="row">
                                                    <div className="col-xs-4 padd-r-0">
                                                        <i className="cl-purple icon ti-briefcase" />
                                                    </div>
                                                    <div className="col-xs-8">
                                                        <div className="widget-detail">
                                                            <h3>4770</h3>
                                                            <span>Total Sales</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12">
                                                        <div className="widget-line">
                                                            <span style={{ width: '40%' }} className="bg-purple widget-horigental-line" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /row */}
                                {/* row */}
                                <div className="row">
                                    <div className="col-md-8 col-sm-12">
                                        <div className="tr-single-box">
                                            <div className="tr-single-header">
                                                <h4 className="mb-0">Extra Area Chart</h4>
                                            </div>
                                            <div className="tr-single-body">
                                                <ul className="list-inline text-center m-t-40">
                                                    <li>
                                                        <h5><i className="fa fa-circle m-r-5 cl-purple" />Booking 220</h5>
                                                    </li>
                                                    <li>
                                                        <h5><i className="fa fa-circle m-r-5 cl-inverse" />Cancelation 20</h5>
                                                    </li>
                                                    <li>
                                                        <h5><i className="fa fa-circle m-r-5 cl-success" />Earning $220</h5>
                                                    </li>
                                                </ul>
                                                <div className="chart" id="extra-area-chart" style={{ height: 350 }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="tr-single-box">
                                            <div className="tr-single-header">
                                                <h5>Recen Booking</h5>
                                            </div>
                                            <div className="ground-list ground-list-hove">
                                                <div className="ground ground-single-list">
                                                    <a href="#">
                                                        <img className="ground-avatar" src="assets/img/user-1.jpg" alt="..." />
                                                        <span className="profile-status bg-online pull-right" />
                                                    </a>
                                                    <div className="ground-content">
                                                        <h6><a href="#">Maryam Amiri</a></h6>
                                                        <small className="text-fade">Co-Founder</small>
                                                    </div>
                                                    <div className="ground-right">
                                                        <span className="small">Online</span>
                                                    </div>
                                                </div>
                                                <div className="ground ground-single-list">
                                                    <a href="#">
                                                        <img className="ground-avatar" src="assets/img/user-2.jpg" alt="..." />
                                                        <span className="profile-status bg-offline pull-right" />
                                                    </a>
                                                    <div className="ground-content">
                                                        <h6><a href="#">Maryam Amiri</a></h6>
                                                        <small className="text-fade">Co-Founder</small>
                                                    </div>
                                                    <div className="ground-right">
                                                        <span className="small">10 Min Ago</span>
                                                    </div>
                                                </div>
                                                <div className="ground ground-single-list">
                                                    <a href="#">
                                                        <img className="ground-avatar" src="assets/img/user-3.jpg" alt="..." />
                                                        <span className="profile-status bg-working pull-right" />
                                                    </a>
                                                    <div className="ground-content">
                                                        <h6><a href="#">Maryam Amiri</a></h6>
                                                        <small className="text-fade">Co-Founder</small>
                                                    </div>
                                                    <div className="ground-right">
                                                        <span className="small">20 Min Ago</span>
                                                    </div>
                                                </div>
                                                <div className="ground ground-single-list">
                                                    <a href="#">
                                                        <img className="ground-avatar" src="assets/img/user-4.jpg" alt="..." />
                                                        <span className="profile-status bg-busy pull-right" />
                                                    </a>
                                                    <div className="ground-content">
                                                        <h6><a href="#">Maryam Amiri</a></h6>
                                                        <small className="text-fade">Co-Founder</small>
                                                    </div>
                                                    <div className="ground-right">
                                                        <span className="small">18 Min Ago</span>
                                                    </div>
                                                </div>
                                                <div className="ground ground-single-list">
                                                    <a href="#">
                                                        <img className="ground-avatar" src="assets/img/user-5.jpg" alt="..." />
                                                        <span className="profile-status bg-online pull-right" />
                                                    </a>
                                                    <div className="ground-content">
                                                        <h6><a href="#">Maryam Amiri</a></h6>
                                                        <small className="text-fade">Co-Founder</small>
                                                    </div>
                                                    <div className="ground-right">
                                                        <span className="small">Online</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /row */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;