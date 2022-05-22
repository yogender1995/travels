import React, { Component, PropTypes } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/* ======================= Start Page Title ===================== */}
                <div className="page-title image-title" style={{ backgroundImage: 'url(assets/img/banner.jpg)' }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <h2>Say Hello</h2>
                            <p><a href="#" className="theme-cl">Home</a> | <span>Say Hello</span></p>
                        </div>
                    </div>
                </div>
                {/* ======================= End Page Title ===================== */}

                <section className="gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-5">
                                <div className="form-box">
                                    <i className="c-icon ti-email theme-cl" />
                                    <div className="c-detail">
                                        <strong>Email On:</strong>
                                        <p>support@travelizm.com</p>
                                    </div>
                                </div>
                                <div className="form-box">
                                    <i className="c-icon ti-headphone-alt theme-cl" />
                                    <div className="c-detail">
                                        <strong>Call Us:</strong>
                                        <p>170 125 457 8547</p>
                                    </div>
                                </div>
                                <div className="form-box">
                                    <i className="c-icon ti-map-alt theme-cl" />
                                    <div className="c-detail">
                                        <strong>Location:</strong>
                                        <p>#210, QCHR7, Near Mirkel Market<br />New York</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div className="form-box">
                                    <form className="c-form">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Name<sup className="cl-danger">*</sup></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Email<sup className="cl-danger">*</sup></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label>Phone<sup className="cl-danger">*</sup></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-sm-6">
                                                <label>Subject</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label>Message</label>
                                                <textarea className="form-control height-150" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <button type="button" className="btn theme-btn btn-arrow">Submit Request</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default Contact;