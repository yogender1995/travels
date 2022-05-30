import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {/* ======================= Start Navigation ===================== */}
                <nav className="navbar navbar-default navbar-mobile navbar-fixed light bootsnav on">
                    <div className="container">
                        {/* Start Logo Header Navigation */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i className="fa fa-bars" />
                            </button>
                            <Link to='/' className="navbar-brand">
                            <img src="assets/img/logo-light.png" className="logo logo-display" alt="" />
                                <img src="assets/img/logo.png" className="logo logo-scrolled" alt="" />
                            </Link>
                        </div>
                        {/* End Logo Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="dropdown nav-bar">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About Us</Link>
                                </li>
                                <li>
                                    <Link to='/find-guide'>Find Guide</Link>
                                </li>

                                <li>
                                    <Link to='/services'>Services</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>Contact</Link>
                                </li>
                                <li>
                                    <Link to='/faqs'>FAQs</Link>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                </nav>
                {/* ======================= End Navigation ===================== */}

            </div>
        );
    }
}


export default Header;