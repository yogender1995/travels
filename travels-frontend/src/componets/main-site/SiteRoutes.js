import Footer from "../main-site/Footer";
import Header from "../main-site/Header";
import Home from "../main-site/Home";
import {Routes, Route,Navigate, Outlet} from 'react-router-dom';
import Aboutus from "../main-site/Aboutus";
import Faqs from "../main-site/Faqs";
import Contact from "../main-site/Contact";
import Services from "../main-site/Services";
import Findguide from "../main-site/Findguide";
import Notfound from "../main-site/Notfound";


import AdminHome from '../dashboard/Home';
import DynamicSection from '../dashboard/DynamicSection';
import React, { Component } from 'react';
import Hotel from "../dashboard/Hotel";


class SiteRoutes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
          <Header />  {this.props.header ? <Header/> : ''}
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/about" element={<Aboutus />}></Route>
         <Route path="/find-guide" element={<Findguide />}></Route>
         <Route path="/services" element={<Services />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
         <Route path="/faqs" element={<Faqs />}></Route>

          <Route path="/admin" element={<AdminHome/>}>
            <Route path="hotel" element={<Hotel />}/>
            <Route path="services" element={<Services />}/>

         </Route>
         <Route path="*" element={<Notfound />}></Route>
      </Routes>
      {this.props.footer ? <Footer/> : ''}
        
      </div>
    );
  }
}

export default SiteRoutes;

