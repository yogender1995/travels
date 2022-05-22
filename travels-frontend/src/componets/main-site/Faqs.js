import React, { Component, PropTypes } from 'react';

class Faqs extends Component {
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
                            <h2>FAQs</h2>
                            <p><a href="#" className="theme-cl">Home</a> | <span>FAQs</span></p>
                        </div>
                    </div>
                </div>
                {/* ======================= End Page Title ===================== */}

                <section className="gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="simple-tab-style">
                                {/* Nav tabs */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active"><a href="#User" aria-controls="home" role="tab" data-toggle="tab"><i className="ti-user" />User</a></li>
                                    <li role="presentation"><a href="#Author" aria-controls="author" role="tab" data-toggle="tab"><i className="ti-star" />Author</a></li>
                                    <li role="presentation"><a href="#Employee" aria-controls="employee" role="tab" data-toggle="tab"><i className="ti-user" />Employee</a></li>
                                    <li role="presentation"><a href="#Support" aria-controls="support" role="tab" data-toggle="tab"><i className="ti-help" />Support</a></li>
                                    <li role="presentation"><a href="#Suggestion" aria-controls="Suggestion" role="tab" data-toggle="tab"><i className="ti-face-sad" />Suggestion</a></li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content">
                                    {/* user */}
                                    <div role="tabpanel" className="tab-pane fade in active" id="User">
                                        <div className="simple-accordion">
                                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="title1">
                                                        <h4 className="panel-title">
                                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#col1" aria-expanded="true" aria-controls="col1">
                                                                Why Travelizm Services?
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="col1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="title1">
                                                        <div className="panel-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="title2">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#col2" aria-expanded="false" aria-controls="col2">
                                                                Benifits of Travelizm Services
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="col2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title2">
                                                        <div className="panel-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="title3">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#col3" aria-expanded="false" aria-controls="col3">
                                                                What is Travelizm?
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="col3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title3">
                                                        <div className="panel-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="title4">
                                                        <h4 className="panel-title">
                                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#col4" aria-expanded="false" aria-controls="col4">
                                                                What People Syaing About travelizm
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="col4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title4">
                                                        <div className="panel-body">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Author */}
                                    <div role="tabpanel" className="tab-pane fade" id="Author">
                                        <div className="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title21">
                                                    <h4 className="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion1" href="#col21" aria-expanded="true" aria-controls="col21">
                                                            Why Travelizm Services?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col21" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="title21">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title22">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#col22" aria-expanded="false" aria-controls="col22">
                                                            Benifits of Travelizm Services
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col22" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title22">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title23">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#col23" aria-expanded="false" aria-controls="col23">
                                                            What is Travelizm?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col23" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title23">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title24">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion1" href="#col24" aria-expanded="false" aria-controls="col24">
                                                            What People Syaing About travelizm
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col24" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title24">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Author */}
                                    {/* Employee */}
                                    <div role="tabpanel" className="tab-pane fade" id="Employee">
                                        <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title31">
                                                    <h4 className="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion2" href="#col31" aria-expanded="true" aria-controls="col31">
                                                            Why Travelizm Services?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col31" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="title31">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title32">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#col32" aria-expanded="false" aria-controls="col32">
                                                            Benifits of Travelizm Services
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col32" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title32">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title33">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#col33" aria-expanded="false" aria-controls="col33">
                                                            What is Travelizm?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col33" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title33">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title34">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion2" href="#col34" aria-expanded="false" aria-controls="col34">
                                                            What People Syaing About travelizm
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col34" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title34">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Employee */}
                                    {/* Support*/}
                                    <div role="tabpanel" className="tab-pane fade" id="Support">
                                        <div className="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title41">
                                                    <h4 className="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion3" href="#col41" aria-expanded="true" aria-controls="col41">
                                                            Why Travelizm Services?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col41" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="title41">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title42">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#col42" aria-expanded="false" aria-controls="col42">
                                                            Benifits of Travelizm Services
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col42" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title42">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title43">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#col43" aria-expanded="false" aria-controls="col43">
                                                            What is Travelizm?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col43" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title43">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title44">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#col44" aria-expanded="false" aria-controls="col44">
                                                            What People Syaing About travelizm
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col44" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title44">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Support */}
                                    {/* Suggestion */}
                                    <div role="tabpanel" className="tab-pane fade" id="Suggestion">
                                        <div className="panel-group" id="accordion4" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title51">
                                                    <h4 className="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion4" href="#col51" aria-expanded="true" aria-controls="col51">
                                                            Why Travelizm Services?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col51" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="title1">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title52">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion4" href="#col52" aria-expanded="false" aria-controls="col52">
                                                            Benifits of Travelizm Services
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col52" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title52">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title53">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion4" href="#col53" aria-expanded="false" aria-controls="col53">
                                                            What is Travelizm?
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col53" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title53">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="title54">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion4" href="#col54" aria-expanded="false" aria-controls="col54">
                                                            What People Syaing About travelizm
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="col54" className="panel-collapse collapse" role="tabpanel" aria-labelledby="title54">
                                                    <div className="panel-body">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Suggestion */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default Faqs;