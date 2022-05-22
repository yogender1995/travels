import Footer from "../main-site/Footer";
import Header from "../main-site/Header";
import Home from "../main-site/Home";
import {Routes, Route} from 'react-router-dom';
import Aboutus from "../main-site/Aboutus";
import Faqs from "../main-site/Faqs";
import Contact from "../main-site/Contact";
import Services from "../main-site/Services";
import Findguide from "../main-site/Findguide";
import Notfound from "../main-site/Notfound";

function SiteRoutes() {
  return (
    <div>
      <Header />
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/about" element={<Aboutus />}></Route>
         <Route path="/find-guide" element={<Findguide />}></Route>
         <Route path="/services" element={<Services />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
         <Route path="/faqs" element={<Faqs />}></Route>
         <Route path="*" element={<Notfound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default SiteRoutes;
