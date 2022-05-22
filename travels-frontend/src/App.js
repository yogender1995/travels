import Footer from "./componets/main-site/Footer";
import Header from "./componets/main-site/Header";
import Main from "./componets/main-site/Main";
import {Routes, Route} from 'react-router-dom';
import Aboutus from "./componets/main-site/Aboutus";
import Faqs from "./componets/main-site/Faqs";
import Contact from "./componets/main-site/Contact";
import Services from "./componets/main-site/Services";
import Findguide from "./componets/main-site/Findguide";
import Notfound from "./componets/main-site/Notfound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
         <Route path="/" element={<Main />}></Route>
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

export default App;
