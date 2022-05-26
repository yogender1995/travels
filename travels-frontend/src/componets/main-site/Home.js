import React, { Component, PropTypes } from 'react';
import AdminSidebar from '../dashboard/Sidebar';

class Main extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
              
                <div>
                    {/* ======================= Start Banner ===================== */}
                    <div className="main-banner" style={{ backgroundImage: 'url(assets/img/banner-9.jpg)' }}>
                        <div className="container">
                            <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                <div className="caption text-center cl-white">
                                    <h2>Discover Your Tour</h2>
                                    <p>Expolore top rated tours, hotels and restaurants around the world</p>
                                </div>
                                <form className="wow-form">
                                    <input type="text" placeholder="Search destination..." />
                                    <button type="submit" className="btn btn-wow theme-btn" name="submit" value="Search"> Find Tour </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* ======================= End Banner ===================== */}
                    <div className="clearfix" />
                    {/* ====================== How It Work ================= */}
                    <section className="how-it-works">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading">
                                        <span className="theme-cl">Working Process</span>
                                        <h1>How It Works?</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="work-process">
                                        <div className="process-img">
                                            <img src="assets/img/tour-1.png" className="img-responsive" alt="" />
                                            <span className="process-num">01</span>
                                        </div>
                                        <h4>Choose a Destination &amp; Guide</h4>
                                        <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="work-process">
                                        <div className="process-img">
                                            <img src="assets/img/tour-2.png" className="img-responsive" alt="" />
                                            <span className="process-num">02</span>
                                        </div>
                                        <h4>Choose your guide &amp; Customize</h4>
                                        <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="work-process">
                                        <div className="process-img">
                                            <img src="assets/img/tour-3.png" className="img-responsive" alt="" />
                                            <span className="process-num">03</span>
                                        </div>
                                        <h4>Book Your Guide Online</h4>
                                        <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ====================== How It Work ================= */}
                    <div className="clearfix" />
                    {/* ====================== Popular Destinations ================= */}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading">
                                        <span className="theme-cl">Top Destinations</span>
                                        <h1>Popular Destinations</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Single Destination */}
                                <div className="col-md-4 col-md-6">
                                    <article className="destination-box style-1">
                                        <div className="destination-box-image">
                                            <figure>
                                                <a href="destination-detail.html">
                                                    <img src="assets/img/destination/des-6.jpg" className="img-responsive listing-box-img" alt="" />
                                                    <div className="list-overlay" />
                                                </a>
                                                <div className="discount-flick">-12%</div>
                                                <div className="read_more"><span>Read more</span></div>
                                                <h4 className="destination-place">
                                                    <a href="destination-detail.html">Halifax, Nova Scotia </a>
                                                </h4>
                                                <a href="#" className="list-like left"><i className="ti-heart" /></a>
                                            </figure>
                                        </div>
                                        <div className="entry-meta">
                                            <div className="meta-item meta-rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half" />
                                            </div>
                                            <div className="meta-item meta-comment fl-right">
                                                <span className="text-through">$7802</span><span className="real-price padd-l-10 font-bold">$7581</span>
                                            </div>
                                        </div>
                                        <div className="inner-box">
                                            <div className="box-inner-ellipsis">
                                                <h4 className="entry-location">
                                                    <a href="destination-detail.html">Singapore</a>
                                                </h4>
                                                <div className="price-box">
                                                    <div className="destination-price fl-right">
                                                        <a href="#"><i className="theme-cl ti-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* Single Destination */}
                                <div className="col-md-4 col-md-6">
                                    <article className="destination-box style-1">
                                        <div className="destination-box-image">
                                            <figure>
                                                <a href="destination-detail.html">
                                                    <img src="assets/img/destination/des-5.jpg" className="img-responsive listing-box-img" alt="" />
                                                    <div className="list-overlay" />
                                                </a>
                                                <div className="discount-flick">-12%</div>
                                                <div className="read_more"><span>Read more</span></div>
                                                <h4 className="destination-place">
                                                    <a href="destination-detail.html">New York City, New York</a>
                                                </h4>
                                                <a href="#" className="list-like left"><i className="ti-heart" /></a>
                                            </figure>
                                        </div>
                                        <div className="entry-meta">
                                            <div className="meta-item meta-rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half" />
                                            </div>
                                            <div className="meta-item meta-comment fl-right">
                                                <span className="text-through">$4525</span><span className="real-price padd-l-10 font-bold">$4258</span>
                                            </div>
                                        </div>
                                        <div className="inner-box">
                                            <div className="box-inner-ellipsis">
                                                <h4 className="entry-location">
                                                    <a href="destination-detail.html">Switzerland</a>
                                                </h4>
                                                <div className="price-box">
                                                    <div className="destination-price fl-right">
                                                        <a href="#"><i className="theme-cl ti-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* Single Destination */}
                                <div className="col-md-4 col-md-6">
                                    <article className="destination-box style-1">
                                        <div className="destination-box-image">
                                            <figure>
                                                <a href="destination-detail.html">
                                                    <img src="assets/img/destination/des-4.jpg" className="img-responsive listing-box-img" alt="" />
                                                    <div className="list-overlay" />
                                                </a>
                                                <div className="discount-flick">-12%</div>
                                                <div className="read_more"><span>Read more</span></div>
                                                <h4 className="destination-place">
                                                    <a href="destination-detail.html">Marrakech, Morroco</a>
                                                </h4>
                                                <a href="#" className="list-like left"><i className="ti-heart" /></a>
                                            </figure>
                                        </div>
                                        <div className="entry-meta">
                                            <div className="meta-item meta-rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star-half" />
                                            </div>
                                            <div className="meta-item meta-comment fl-right">
                                                <span className="text-through">$1856</span><span className="real-price padd-l-10 font-bold">$1750</span>
                                            </div>
                                        </div>
                                        <div className="inner-box">
                                            <div className="box-inner-ellipsis">
                                                <h4 className="entry-location">
                                                    <a href="destination-detail.html">Saudi Arabia</a>
                                                </h4>
                                                <div className="price-box">
                                                    <div className="destination-price fl-right">
                                                        <a href="#"><i className="theme-cl ti-arrow-right" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ====================== Popular Destinations ================= */}
                    <div className="clearfix" />
                    {/* ====================== Tour Guide ================= */}
                    <section className="gray-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading">
                                        <span className="theme-cl">Choose Guider</span>
                                        <h1>Popular Guide</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Single Guide */}
                                <div className="col-md-3 col-sm-6">
                                    <div className="guides-container">
                                        <div className="guides-box">
                                            <div className="guides-img-box">
                                                <img src="assets/img/user-1.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="guider-detail">
                                                <h4>Suryansh Vighul</h4>
                                                <h5 className="theme-cl font-bold">$40/Hour</h5>
                                            </div>
                                        </div>
                                        <a href="guide-detail.html" className="btn theme-btn full-width">Book Now</a>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-md-3 col-sm-6">
                                    <div className="guides-container">
                                        <div className="guides-box">
                                            <div className="guides-img-box">
                                                <img src="assets/img/user-2.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="guider-detail">
                                                <h4>Suryansh Vighul</h4>
                                                <h5 className="theme-cl font-bold">$40/Hour</h5>
                                            </div>
                                        </div>
                                        <a href="guide-detail.html" className="btn theme-btn full-width">Book Now</a>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-md-3 col-sm-6">
                                    <div className="guides-container">
                                        <div className="guides-box">
                                            <div className="guides-img-box">
                                                <img src="assets/img/user-3.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="guider-detail">
                                                <h4>Suryansh Vighul</h4>
                                                <h5 className="theme-cl font-bold">$40/Hour</h5>
                                            </div>
                                        </div>
                                        <a href="guide-detail.html" className="btn theme-btn full-width">Book Now</a>
                                    </div>
                                </div>
                                {/* Single Guide */}
                                <div className="col-md-3 col-sm-6">
                                    <div className="guides-container">
                                        <div className="guides-box">
                                            <div className="guides-img-box">
                                                <img src="assets/img/user-4.jpg" className="img-responsive" alt="" />
                                            </div>
                                            <div className="guider-detail">
                                                <h4>Suryansh Vighul</h4>
                                                <h5 className="theme-cl font-bold">$40/Hour</h5>
                                            </div>
                                        </div>
                                        <a href="guide-detail.html" className="btn theme-btn full-width">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ====================== Tour Guide ================= */}
                    <div className="clearfix" />
                    {/* ====================== Popular Domestic Routes From India ================= */}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading">
                                        <span className="theme-cl">Expert Guide</span>
                                        <h1>Experts Of The Week</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Single Experts */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="experts-container">
                                        <div className="expert-thumb">
                                            <img src="assets/img/user-1.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="experts-detail">
                                            <h4><a href="#">Suryansh Vighul</a></h4>
                                            <span>London Guide</span>
                                            <span className="user-status bg-success">Online</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Experts */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="experts-container">
                                        <div className="expert-thumb">
                                            <img src="assets/img/user-2.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="experts-detail">
                                            <h4><a href="#">Richita Setthy</a></h4>
                                            <span>Canada Guide</span>
                                            <span className="user-status bg-warning">Busy</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Experts */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="experts-container">
                                        <div className="expert-thumb">
                                            <img src="assets/img/user-3.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="experts-detail">
                                            <h4><a href="#">Adam Survinia</a></h4>
                                            <span>Austrailia Guide</span>
                                            <span className="user-status bg-success">Online</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Experts */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="experts-container">
                                        <div className="expert-thumb">
                                            <img src="assets/img/user-4.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="experts-detail">
                                            <h4><a href="#">Shilpa Suchi</a></h4>
                                            <span>United Kingdom Guide</span>
                                            <span className="user-status bg-danger">Offline</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Experts */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="experts-container">
                                        <div className="expert-thumb">
                                            <img src="assets/img/user-5.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="experts-detail">
                                            <h4><a href="#">Moris Adam</a></h4>
                                            <span>New York Guide</span>
                                            <span className="user-status bg-success">Online</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Experts */}
                                <div className="col-md-4 col-sm-6">
                                    <div className="experts-container">
                                        <div className="expert-thumb">
                                            <img src="assets/img/user-6.jpg" className="img-responsive" alt="" />
                                        </div>
                                        <div className="experts-detail">
                                            <h4><a href="#">Daniel Divanchia</a></h4>
                                            <span>London Guide</span>
                                            <span className="user-status bg-warning">Busy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ====================== Domestic Routes ================= */}
                    <div className="clearfix" />
                    {/* ============== Before Footer ====================== */}
                    <section className="before-footer bt-1 bb-1">
                        <div className="container-fluid padd-0 full-width">
                            <div className=" col-md-2 col-sm-2 br-1 mbb-1">
                                <div className="data-flex">
                                    <h4>Contact Us!</h4>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 br-1 mbb-1">
                                <div className="data-flex text-center">
                                    53 Boulevard Victor Hugo 44200 Nantes, France
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 br-1 mbb-1">
                                <div className="data-flex text-center">
                                    <span className="d-block mrg-bot-0">06 52 52 20 30</span>
                                    <a href="#" className="theme-cl"><strong>hello@gmail.com</strong></a>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 padd-0">
                                <div className="data-flex padd-0">
                                    <ul className="social-share">
                                        <li><a href="#"><i className="fa fa-facebook theme-cl" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus theme-cl" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter theme-cl" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin theme-cl" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =================== Before Footer ====================== */}
                </div>

            </div>
        );
    }
}

export default Main;