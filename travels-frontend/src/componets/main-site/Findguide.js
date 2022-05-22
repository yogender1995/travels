import React, { Component, PropTypes } from 'react';

class Findguide extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    {/* ======================= Start Page Title ===================== */}
                    <div className="page-title image-title" style={{ backgroundImage: 'url(assets/img/banner.jpg)' }}>
                        <div className="container">
                            <div className="page-title-wrap">
                                <h2>Hire Guide</h2>
                                <p><a href="#" className="theme-cl">Home</a> | <span>Hire Guide</span></p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}
                    {/* =========== Hire Guider =================== */}
                    <section className="gray-bg">
                        <div className="container">
                            {/* Row */}
                            <div className="row mrg-0">
                                <div className="tr-single-box short-box">
                                    <div className="col-xs-4 align-self-center">
                                        <h4>Shorty By</h4>
                                    </div>
                                    <div className="col-xs-8 text-right">
                                        <div className="btn-group mr-lg-2">
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Most Recent
                                            </button>
                                            <div className="dropdown-menu pull-right animated flipInX">
                                                <a href="#">Recent</a>
                                                <a href="#">Most Popular</a>
                                                <a href="#">Most Ratting</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Row */}
                            {/* Start all guider */}
                            <div className="row">
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-1.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-2.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-3.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-4.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-5.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-6.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-7.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-8.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="guide-container">
                                        <div className="guide-container-box">
                                            <div className="fguide-thumb">
                                                <img src="assets/img/user-1.jpg" className="img-responsive img-circle" alt="" />
                                                <p className="padd-15 text-center"><i className="fa fa-star cl-warning" />4.7/<span>5</span></p>
                                            </div>
                                            <div className="fguide-detail">
                                                <h4>Adam Dicluver</h4>
                                                <ul className="extra-service">
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-user" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>experience</strong>
                                                                    5 Year
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-timer" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>Hire</strong>
                                                                    10,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon-box-icon-block">
                                                            <a href="#">
                                                                <div className="icon-box-round">
                                                                    <i className="ti-eye" />
                                                                </div>
                                                                <div className="icon-box-text">
                                                                    <strong>View</strong>
                                                                    16,000
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="guide-container-links">
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />View Profile</a>
                                            <a href="guide-detail.html" className="btn btn-default"><i className="ti-user mrg-r-5" />Send Message</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Start all guider */}
                        </div>
                    </section>
                    {/* =========== End Hire Guider =================== */}
                </div>

            </div>
        );
    }
}


export default Findguide;