import React, { Component, PropTypes } from 'react';

class Aboutus extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div>
                    {/* ======================= Start Page Title ===================== */}
                    <div className="page-title image-title" style={{ backgroundImage: 'url(assets/img/about.jpg)' }}>
                        <div className="container">
                            <div className="page-title-wrap">
                                <h2>Who We Are?</h2>
                                <p><a href="#" className="theme-cl">Home</a> | <span>About Us</span></p>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Page Title ===================== */}
                    {/* =========== Who We Are =================== */}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="ab-detail">
                                        <h2>Who We Are?</h2>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    {/* row */}
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="info-module">
                                                <i className="ti-help-alt cl-success" />
                                                <h4 className="infobox_title">24x7 Support</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="info-module">
                                                <i className="ti-world cl-success" />
                                                <h4 className="infobox_title">150+ Countries</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /row */}
                                    {/* row */}
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="info-module">
                                                <i className="ti-headphone-alt cl-success" />
                                                <h4 className="infobox_title">740+ Branches</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="info-module">
                                                <i className="ti-user cl-success" />
                                                <h4 className="infobox_title">10,000+ Member</h4>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /row */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =========== End Who We are =================== */}
                </div>

            </div>
        );
    }
}


export default Aboutus;