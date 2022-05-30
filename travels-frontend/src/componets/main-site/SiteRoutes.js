import Footer from "../main-site/Footer";
import Header from "../main-site/Header";
import Home from "../main-site/Home";
import { Routes, Route } from 'react-router-dom';
import Aboutus from "../main-site/Aboutus";
import Faqs from "../main-site/Faqs";
import Contact from "../main-site/Contact";
import Services from "../main-site/Services";
import Findguide from "../main-site/Findguide";
import Notfound from "../main-site/Notfound";
import { Component } from 'react';
import Login from '../dashboard/Login';
import Signup from '../dashboard/Signup';


class SiteRoutes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {<Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/find-guide" element={<Findguide />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="admin/login" element={<Login />} />
          <Route path="admin/register" element={<Signup />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        {<Footer />}
      </>
    );
  }
}

export default SiteRoutes;