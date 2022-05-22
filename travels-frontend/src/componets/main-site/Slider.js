import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div>
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}