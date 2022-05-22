import React, { Component, PropTypes } from 'react';

class Services extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/* ======================= Start Page Title ===================== */}
                <div className="page-title image-title" style={{ backgroundImage: 'url(assets/img/about.jpg)' }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <h2>Our Services</h2>
                            <p><a href="#" className="theme-cl">Home</a> | <span>Our Services</span></p>
                        </div>
                    </div>
                </div>
                {/* ======================= End Page Title ===================== */}

                <section className="gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading">
                                    <span className="theme-cl">New Services</span>
                                    <h1>Latest Services</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="info-services">
                                    <img src="assets/img/tt-1.png" alt="" />
                                    <h4 className="infobox_title">Sightseeing Tours</h4>
                                    <div className="infobox_content">Cryptronick caters to clients who require an intensive, full-service approach to SEO</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="info-services">
                                    <img src="assets/img/tt-2.png" alt="" />
                                    <h4 className="infobox_title">Trips out of town</h4>
                                    <div className="infobox_content">Cryptronick caters to clients who require an intensive, full-service approach to SEO</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="info-services">
                                    <img src="assets/img/tt-3.png" alt="" />
                                    <h4 className="infobox_title">Extraordinary Tours</h4>
                                    <div className="infobox_content">Cryptronick caters to clients who require an intensive, full-service approach to SEO</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="info-services">
                                    <img src="assets/img/tt-4.png" alt="" />
                                    <h4 className="infobox_title">History &amp; Architecture</h4>
                                    <div className="infobox_content">Cryptronick caters to clients who require an intensive, full-service approach to SEO</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="info-services">
                                    <img src="assets/img/tt-5.png" alt="" />
                                    <h4 className="infobox_title">Food &amp; Cooking Tours</h4>
                                    <div className="infobox_content">Cryptronick caters to clients who require an intensive, full-service approach to SEO</div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="info-services">
                                    <img src="assets/img/tt-6.png" alt="" />
                                    <h4 className="infobox_title">Museums &amp; Art</h4>
                                    <div className="infobox_content">Cryptronick caters to clients who require an intensive, full-service approach to SEO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default Services;